import type { CollectionEntry } from 'astro:content';

import { site } from '../data/site';
import { getImageMetadata } from './image-metadata.js';
import type { BreadcrumbItem } from './seo';
import { getAbsoluteAssetUrl, getAbsoluteUrl } from './seo';

type BlogPost = CollectionEntry<'blog'>;

function cleanStructuredData<T>(value: T): T {
  if (Array.isArray(value)) {
    return value
      .map((entry) => cleanStructuredData(entry))
      .filter((entry) => entry !== undefined) as T;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
      .map(([key, entryValue]) => [key, cleanStructuredData(entryValue)] as const)
      .filter(([, entryValue]) => entryValue !== undefined);

    return Object.fromEntries(entries) as T;
  }

  return value;
}

function buildImageObject(path: string | undefined, base: string | URL = site.url) {
  if (!path) {
    return undefined;
  }

  const metadata = getImageMetadata(path);

  return cleanStructuredData({
    '@type': 'ImageObject',
    url: getAbsoluteAssetUrl(path, base),
    width: metadata?.width,
    height: metadata?.height,
  });
}

export function buildWebsiteJsonLd(base: string | URL = site.url) {
  return cleanStructuredData({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': getAbsoluteUrl('/#website', base),
    name: site.name,
    url: getAbsoluteUrl('/', base),
    description: site.description,
    publisher: {
      '@id': getAbsoluteUrl('/#organization', base),
    },
  });
}

export function buildOrganizationJsonLd(base: string | URL = site.url) {
  return cleanStructuredData({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': getAbsoluteUrl('/#organization', base),
    name: site.name,
    url: getAbsoluteUrl('/', base),
    email: `mailto:${site.email}`,
    description: site.description,
    logo: buildImageObject('/favicon.svg', base),
  });
}

export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
  currentPath: string,
  base: string | URL = site.url,
) {
  const currentUrl = getAbsoluteUrl(currentPath, base);

  return cleanStructuredData({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? getAbsoluteUrl(item.href, base) : currentUrl,
    })),
  });
}

export function buildCollectionPageJsonLd(
  title: string,
  description: string,
  path: string,
  base: string | URL = site.url,
  imagePath?: string,
) {
  return cleanStructuredData({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: getAbsoluteUrl(path, base),
    isPartOf: {
      '@id': getAbsoluteUrl('/#website', base),
    },
    primaryImageOfPage: buildImageObject(imagePath, base),
  });
}

export function buildArticleJsonLd(
  post: BlogPost,
  articleUrl: string,
  categoryTitle?: string,
  base: string | URL = site.url,
) {
  const imageObject = buildImageObject(post.data.image, base);

  return cleanStructuredData({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.data.title,
    description: post.data.description,
    url: articleUrl,
    datePublished: post.data.publishDate.toISOString(),
    dateModified: (post.data.updatedDate ?? post.data.publishDate).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    articleSection: categoryTitle ?? post.data.category,
    author: {
      '@type': 'Organization',
      name: post.data.author,
    },
    publisher: {
      '@id': getAbsoluteUrl('/#organization', base),
    },
    image: imageObject,
    isPartOf: {
      '@id': getAbsoluteUrl('/#website', base),
    },
  });
}
