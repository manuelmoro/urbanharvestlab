import { getCollection } from 'astro:content';

import { categories } from '../data/categories';
import { site } from '../data/site';
import { getLatestDate, getPostsByCategory, getPublishedPosts } from '../utils/content';
import { escapeXml, getAbsoluteUrl, getCategoryArchivePath, getCategoryPath, getPostPath } from '../utils/seo';

export async function GET() {
  const posts = getPublishedPosts(await getCollection('blog'));
  const hubs = await getCollection('hubs');
  const staticPages = ['/', '/blog/', '/categories/', '/about/', '/contact/', '/affiliate-disclosure/', '/privacy-policy/'];
  const latestPostDate = getLatestDate(posts.map((post) => post.data.updatedDate ?? post.data.publishDate)) ?? new Date();
  const latestHubUpdate =
    getLatestDate(
      categories.map((category) =>
        getLatestDate(getPostsByCategory(posts, category.slug).map((post) => post.data.updatedDate ?? post.data.publishDate)),
      ),
    ) ?? latestPostDate;
  const categoryPages = categories.map((category) => ({
    path: getCategoryArchivePath(category.slug),
    lastModified:
      getLatestDate(getPostsByCategory(posts, category.slug).map((post) => post.data.updatedDate ?? post.data.publishDate)) ??
      latestPostDate,
  }));
  const hubPages = hubs.map((hub) => ({
    path: getCategoryPath(hub.slug),
    lastModified:
      getLatestDate(
        getPostsByCategory(posts, hub.data.category).map((post) => post.data.updatedDate ?? post.data.publishDate),
      ) ?? latestHubUpdate,
  }));
  const postPages = posts.map((post) => ({
    path: getPostPath(post),
    lastModified: post.data.updatedDate ?? post.data.publishDate,
  }));

  const urls = [
    ...staticPages.map((path) => ({
      path,
      lastModified: path === '/' || path === '/blog/' ? latestPostDate : latestHubUpdate,
    })),
    ...hubPages,
    ...categoryPages,
    ...postPages,
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (entry) =>
        `  <url>\n    <loc>${escapeXml(getAbsoluteUrl(entry.path, site.url))}</loc>\n    <lastmod>${entry.lastModified.toISOString()}</lastmod>\n  </url>`,
    )
    .join('\n')}\n</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
