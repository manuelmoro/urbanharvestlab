import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const publicDirectory = fileURLToPath(new URL('../../public/', import.meta.url));
const imageMetadataCache = new Map();

function parseNumericAttribute(value) {
  if (!value) {
    return undefined;
  }

  const parsed = Number.parseFloat(value);

  return Number.isFinite(parsed) ? parsed : undefined;
}

function parseSvgDimensions(source) {
  const widthMatch = source.match(/\bwidth=["']([\d.]+)(?:px)?["']/i);
  const heightMatch = source.match(/\bheight=["']([\d.]+)(?:px)?["']/i);
  const width = parseNumericAttribute(widthMatch?.[1]);
  const height = parseNumericAttribute(heightMatch?.[1]);

  if (width && height) {
    return { width, height };
  }

  const viewBoxMatch = source.match(/\bviewBox=["'][^"']*?([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)["']/i);
  const viewBoxWidth = parseNumericAttribute(viewBoxMatch?.[3]);
  const viewBoxHeight = parseNumericAttribute(viewBoxMatch?.[4]);

  if (viewBoxWidth && viewBoxHeight) {
    return { width: viewBoxWidth, height: viewBoxHeight };
  }

  return {};
}

function parsePngDimensions(buffer) {
  if (buffer.length < 24) {
    return {};
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function parseWebpDimensions(buffer) {
  if (buffer.length < 30) {
    return {};
  }

  const chunkType = buffer.toString('ascii', 12, 16);

  if (chunkType === 'VP8X') {
    return {
      width: 1 + buffer.readUIntLE(24, 3),
      height: 1 + buffer.readUIntLE(27, 3),
    };
  }

  if (chunkType === 'VP8L') {
    const width = 1 + (((buffer[21] & 0x3f) << 8) | buffer[20]);
    const height = 1 + (((buffer[23] & 0x0f) << 10) | (buffer[22] << 2) | ((buffer[21] & 0xc0) >> 6));

    return { width, height };
  }

  if (chunkType === 'VP8 ') {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }

  return {};
}

function parseJpegDimensions(buffer) {
  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];

    if (!marker || marker === 0xd8 || marker === 0xd9) {
      offset += 2;
      continue;
    }

    const segmentLength = buffer.readUInt16BE(offset + 2);

    if ((marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) || (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf)) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += 2 + segmentLength;
  }

  return {};
}

function inferMimeType(extension) {
  switch (extension) {
    case '.png':
      return 'image/png';
    case '.webp':
      return 'image/webp';
    case '.svg':
      return 'image/svg+xml';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    default:
      return undefined;
  }
}

/**
 * @param {string | undefined | null} source
 * @returns {{ src: string, width?: number, height?: number, mimeType?: string } | undefined}
 */
export function getImageMetadata(source) {
  if (!source) {
    return undefined;
  }

  const [cleanSource] = source.split(/[?#]/);

  if (!cleanSource.startsWith('/')) {
    return undefined;
  }

  if (imageMetadataCache.has(cleanSource)) {
    return imageMetadataCache.get(cleanSource) ?? undefined;
  }

  const filePath = path.join(publicDirectory, cleanSource.slice(1));

  if (!existsSync(filePath)) {
    imageMetadataCache.set(cleanSource, null);
    return undefined;
  }

  const extension = path.extname(filePath).toLowerCase();
  const mimeType = inferMimeType(extension);
  let dimensions = {};

  if (extension === '.svg') {
    dimensions = parseSvgDimensions(readFileSync(filePath, 'utf8'));
  } else {
    const buffer = readFileSync(filePath);

    if (extension === '.png') {
      dimensions = parsePngDimensions(buffer);
    } else if (extension === '.webp') {
      dimensions = parseWebpDimensions(buffer);
    } else if (extension === '.jpg' || extension === '.jpeg') {
      dimensions = parseJpegDimensions(buffer);
    }
  }

  const metadata = {
    src: cleanSource,
    ...dimensions,
    mimeType,
  };

  imageMetadataCache.set(cleanSource, metadata);

  return metadata;
}
