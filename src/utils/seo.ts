import type { CollectionEntry } from 'astro:content';

import { site } from '../data/site';

type BlogPost = CollectionEntry<'blog'>;
const ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+\-.]*:/i;

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export const homePath = '/';
export const blogIndexPath = '/blog/';
export const categoriesIndexPath = '/categories/';

function withLeadingSlash(path: string) {
  if (!path || path === '/') {
    return '/';
  }

  return path.startsWith('/') ? path : `/${path}`;
}

function splitPathParts(path: string) {
  const match = path.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);

  return {
    pathname: match?.[1] || '/',
    search: match?.[2] ?? '',
    hash: match?.[3] ?? '',
  };
}

export function normalizePathname(pathname: string) {
  const normalizedPath = withLeadingSlash(pathname);

  if (normalizedPath === '/') {
    return normalizedPath;
  }

  return normalizedPath.replace(/\/+$/, '') + '/';
}

export function withTrailingSlash(path: string) {
  return normalizePathname(path);
}

export function normalizePath(path: string) {
  if (ABSOLUTE_URL_PATTERN.test(path)) {
    return new URL(path).toString();
  }

  const { pathname, search, hash } = splitPathParts(path);

  return `${normalizePathname(pathname)}${search}${hash}`;
}

export function getAbsoluteUrl(path: string, base: string | URL = site.url) {
  return ABSOLUTE_URL_PATTERN.test(path) ? new URL(path).toString() : new URL(normalizePath(path), base).toString();
}

export function getAbsoluteAssetUrl(path: string, base: string | URL = site.url) {
  if (ABSOLUTE_URL_PATTERN.test(path)) {
    return new URL(path).toString();
  }

  const { pathname, search, hash } = splitPathParts(path);

  return new URL(`${withLeadingSlash(pathname)}${search}${hash}`, base).toString();
}

export function getHubPath(slug: string) {
  return normalizePath(`/${slug}`);
}

export function getCategoryPath(slug: string) {
  return getHubPath(slug);
}

export function getCategoryArchivePath(slug: string) {
  return normalizePath(`/category/${slug}`);
}

export function getPostPath(postOrSlug: BlogPost | string) {
  const slug = typeof postOrSlug === 'string' ? postOrSlug : postOrSlug.slug;

  return normalizePath(`/blog/${slug}`);
}

export function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
