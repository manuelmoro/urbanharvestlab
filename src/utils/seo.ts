import type { CollectionEntry } from 'astro:content';

import { site } from '../data/site';

type BlogPost = CollectionEntry<'blog'>;

function withLeadingSlash(path: string) {
  return path.startsWith('/') ? path : `/${path}`;
}

export function withTrailingSlash(path: string) {
  const normalizedPath = withLeadingSlash(path);

  return normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`;
}

export function getAbsoluteUrl(path: string, base: string | URL = site.url) {
  return new URL(withTrailingSlash(path), base).toString();
}

export function getAbsoluteAssetUrl(path: string, base: string | URL = site.url) {
  return new URL(withLeadingSlash(path), base).toString();
}

export function getCategoryPath(slug: string) {
  return withTrailingSlash(`/${slug}`);
}

export function getCategoryArchivePath(slug: string) {
  return withTrailingSlash(`/category/${slug}`);
}

export function getPostPath(postOrSlug: BlogPost | string) {
  const slug = typeof postOrSlug === 'string' ? postOrSlug : postOrSlug.slug;

  return withTrailingSlash(`/blog/${slug}`);
}

export function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
