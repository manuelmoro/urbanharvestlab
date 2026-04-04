import { createReadStream } from 'node:fs';
import { access, stat } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const defaultHost = process.env.HOST ?? '127.0.0.1';
const defaultPort = Number.parseInt(process.env.PORT ?? '4321', 10);

const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.gif', 'image/gif'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.jpeg', 'image/jpeg'],
  ['.jpg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.mjs', 'text/javascript; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.webp', 'image/webp'],
  ['.xml', 'application/xml; charset=utf-8'],
]);

function parseCliArgs(argv) {
  const options = {
    host: defaultHost,
    port: defaultPort,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const nextArg = argv[index + 1];

    if ((arg === '--host' || arg === '-H') && nextArg) {
      options.host = nextArg;
      index += 1;
      continue;
    }

    if ((arg === '--port' || arg === '-p') && nextArg) {
      const parsedPort = Number.parseInt(nextArg, 10);

      if (!Number.isNaN(parsedPort)) {
        options.port = parsedPort;
      }

      index += 1;
    }
  }

  return options;
}

function hasFileExtension(pathname) {
  return path.posix.basename(pathname).includes('.');
}

function getRelativePath(pathname) {
  return pathname.replace(/^\/+/, '');
}

function toAbsolutePath(relativePath) {
  const normalizedPath = path.normalize(relativePath);
  const absolutePath = path.resolve(distDir, normalizedPath);
  const distPrefix = `${distDir}${path.sep}`;

  if (absolutePath !== distDir && !absolutePath.startsWith(distPrefix)) {
    return null;
  }

  return absolutePath;
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function findServeTarget(pathname) {
  if (pathname === '/') {
    return toAbsolutePath('index.html');
  }

  const relativePath = getRelativePath(pathname);

  if (pathname.endsWith('/')) {
    return toAbsolutePath(path.join(relativePath, 'index.html'));
  }

  return toAbsolutePath(relativePath);
}

function getContentType(filePath) {
  return mimeTypes.get(path.extname(filePath).toLowerCase()) ?? 'application/octet-stream';
}

function sendRedirect(request, response, location) {
  response.writeHead(308, {
    Location: location,
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'public, max-age=0, must-revalidate',
  });

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  response.end(`Redirecting to ${location}`);
}

function getCacheControl(filePath) {
  return filePath.includes(`${path.sep}_astro${path.sep}`)
    ? 'public, max-age=31536000, immutable'
    : 'public, max-age=0, must-revalidate';
}

async function sendFile(request, response, filePath, statusCode = 200) {
  const fileStat = await stat(filePath);
  response.writeHead(statusCode, {
    'Content-Length': fileStat.size,
    'Content-Type': getContentType(filePath),
    'Cache-Control': getCacheControl(filePath),
  });

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
}

async function handleRequest(request, response) {
  try {
    const hostHeader = request.headers.host ?? `${serverOptions.host}:${serverOptions.port}`;
    const requestUrl = new URL(request.url ?? '/', `http://${hostHeader}`);
    const pathname = decodeURIComponent(requestUrl.pathname);

    if (pathname !== '/' && !pathname.endsWith('/') && !hasFileExtension(pathname)) {
      const redirectTarget = toAbsolutePath(path.join(getRelativePath(pathname), 'index.html'));

      if (redirectTarget && (await fileExists(redirectTarget))) {
        const location = `${pathname}/${requestUrl.search}`;
        sendRedirect(request, response, location);
        return;
      }
    }

    const filePath = await findServeTarget(pathname);

    if (filePath && (await fileExists(filePath))) {
      await sendFile(request, response, filePath);
      return;
    }

    const fallback404Path = toAbsolutePath('404.html');

    if (fallback404Path && (await fileExists(fallback404Path))) {
      await sendFile(request, response, fallback404Path, 404);
      return;
    }

    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Internal server error');
    console.error(error);
  }
}

const serverOptions = parseCliArgs(process.argv.slice(2));

const server = http.createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, {
      Allow: 'GET, HEAD',
      'Content-Type': 'text/plain; charset=utf-8',
    });
    response.end('Method not allowed');
    return;
  }

  handleRequest(request, response);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${serverOptions.port} is already in use on ${serverOptions.host}.`);
  } else if (error.code === 'EPERM') {
    console.error(`Binding to ${serverOptions.host}:${serverOptions.port} is not permitted in this environment.`);
  } else {
    console.error(error);
  }

  process.exit(1);
});

server.listen(serverOptions.port, serverOptions.host, async () => {
  const buildPresent = await fileExists(distDir);

  if (!buildPresent) {
    console.warn(`Warning: ${distDir} does not exist yet. Run "npm run build" first.`);
  }

  console.log(`Serving ${distDir} on http://${serverOptions.host}:${serverOptions.port}`);
});
