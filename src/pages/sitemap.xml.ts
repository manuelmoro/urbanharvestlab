import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { getCollection } from 'astro:content';

import { categories } from '../data/categories';
import { site } from '../data/site';
import { getLatestDate, getPostsByCategory, getPublishedPosts } from '../utils/content';
import { escapeXml, getAbsoluteUrl, getCategoryPath, getPostPath, withTrailingSlash } from '../utils/seo';

type ChangeFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

type SitemapEntry = {
  path: string;
  lastModified: Date;
  changefreq: ChangeFrequency;
  priority: '1.0' | '0.9' | '0.8' | '0.7' | '0.3';
};

const sitemapMetadata = {
  home: { changefreq: 'daily', priority: '1.0' },
  blogIndex: { changefreq: 'daily', priority: '0.9' },
  category: { changefreq: 'weekly', priority: '0.8' },
  article: { changefreq: 'monthly', priority: '0.7' },
  static: { changefreq: 'yearly', priority: '0.3' },
} as const satisfies Record<string, Pick<SitemapEntry, 'changefreq' | 'priority'>>;

function getSourceLastModified(relativePath: string, fallback?: Date) {
  try {
    return statSync(fileURLToPath(new URL(relativePath, import.meta.url))).mtime;
  } catch {
    return fallback ?? new Date();
  }
}

function createSitemapEntry(
  path: string,
  lastModified: Date,
  metadata: Pick<SitemapEntry, 'changefreq' | 'priority'>,
): SitemapEntry {
  return {
    path: withTrailingSlash(path),
    lastModified,
    changefreq: metadata.changefreq,
    priority: metadata.priority,
  };
}

function dedupeEntries(entries: SitemapEntry[]) {
  const entriesByPath = new Map<string, SitemapEntry>();

  for (const entry of entries) {
    const existing = entriesByPath.get(entry.path);

    if (!existing) {
      entriesByPath.set(entry.path, entry);
      continue;
    }

    if (entry.lastModified > existing.lastModified) {
      entriesByPath.set(entry.path, {
        ...existing,
        lastModified: entry.lastModified,
      });
    }
  }

  return [...entriesByPath.values()];
}

export async function GET() {
  const posts = getPublishedPosts(await getCollection('blog'));
  const hubs = await getCollection('hubs');
  const hubSlugs = new Set(hubs.map((hub) => hub.slug));
  const latestPostDate =
    getLatestDate(posts.map((post) => post.data.updatedDate ?? post.data.publishDate)) ??
    getSourceLastModified('./index.astro');
  const staticPages = [
    { path: '/about/', sourcePath: './about.astro' },
    { path: '/contact/', sourcePath: './contact.astro' },
    { path: '/affiliate-disclosure/', sourcePath: './affiliate-disclosure.astro' },
    { path: '/privacy-policy/', sourcePath: './privacy-policy.astro' },
  ];
  const homeEntry = createSitemapEntry(
    '/',
    getLatestDate([getSourceLastModified('./index.astro'), latestPostDate]) ?? latestPostDate,
    sitemapMetadata.home,
  );
  const blogIndexEntry = createSitemapEntry(
    '/blog/',
    getLatestDate([getSourceLastModified('./blog/index.astro'), latestPostDate]) ?? latestPostDate,
    sitemapMetadata.blogIndex,
  );
  const categoryPages = categories
    .filter((category) => hubSlugs.has(category.slug))
    .map((category) => {
      const categoryLastModified =
        getLatestDate([
          getSourceLastModified(`../content/hubs/${category.slug}.md`, latestPostDate),
          getLatestDate(
            getPostsByCategory(posts, category.slug).map((post) => post.data.updatedDate ?? post.data.publishDate),
          ),
        ]) ?? latestPostDate;

      return createSitemapEntry(getCategoryPath(category.slug), categoryLastModified, sitemapMetadata.category);
    });
  const postPages = posts.map((post) =>
    createSitemapEntry(getPostPath(post), post.data.updatedDate ?? post.data.publishDate, sitemapMetadata.article),
  );
  const staticEntries = staticPages.map((page) =>
    createSitemapEntry(page.path, getSourceLastModified(page.sourcePath, latestPostDate), sitemapMetadata.static),
  );

  const urls = dedupeEntries([
    homeEntry,
    blogIndexEntry,
    ...categoryPages,
    ...postPages,
    ...staticEntries,
  ]);

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (entry) =>
        `  <url>\n    <loc>${escapeXml(getAbsoluteUrl(entry.path, site.url))}</loc>\n    <lastmod>${entry.lastModified.toISOString()}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join('\n')}\n</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
