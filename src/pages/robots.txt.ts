import { site } from '../data/site';

export function GET() {
  const lines = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /__astro_dev_toolbar__/',
    'Disallow: /__vite_ping',
    '',
    `Sitemap: ${site.url}/sitemap.xml`,
  ];
  const body = `${lines.join('\n')}\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
