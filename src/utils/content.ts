import type { CollectionEntry } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;
type HubEntry = CollectionEntry<'hubs'>;

export function sortPostsByDate(posts: BlogPost[]) {
  return [...posts].sort(
    (left, right) => right.data.publishDate.getTime() - left.data.publishDate.getTime(),
  );
}

export function getPublishedPosts(posts: BlogPost[]) {
  const now = Date.now();

  return sortPostsByDate(
    posts.filter((post) => !post.data.draft && post.data.publishDate.getTime() <= now),
  );
}

export function getFeaturedPosts(posts: BlogPost[]) {
  return getPublishedPosts(posts).filter((post) => post.data.featured);
}

export function getPopularPosts(posts: BlogPost[]) {
  const popularPosts = getPublishedPosts(posts).filter((post) => post.data.popular);

  return popularPosts.length > 0 ? popularPosts : getFeaturedPosts(posts);
}

export function getPostsByCategory(posts: BlogPost[], category: BlogPost['data']['category']) {
  return getPublishedPosts(posts).filter((post) => post.data.category === category);
}

export function getPostsBySlugs(posts: BlogPost[], slugs: string[]) {
  const postMap = new Map(posts.map((post) => [post.slug, post]));

  return slugs.map((slug) => postMap.get(slug)).filter(Boolean) as BlogPost[];
}

export function getLatestDate(dates: (Date | undefined)[]) {
  const timestamps = dates
    .filter(Boolean)
    .map((date) => date?.getTime())
    .filter((timestamp): timestamp is number => typeof timestamp === 'number');

  return timestamps.length > 0 ? new Date(Math.max(...timestamps)) : undefined;
}

// Hub groupings live in content so both the hub route and the category archive can reuse them.
export function buildGuideSections(
  sections: HubEntry['data']['guideSections'],
  posts: BlogPost[],
) {
  return sections
    .map((section) => ({
      ...section,
      posts: getPostsBySlugs(posts, section.slugs),
    }))
    .filter((section) => section.posts.length > 0);
}

export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit = 3) {
  const relatedSlugSet = new Set(currentPost.data.relatedSlugs);
  const publishedPosts = getPublishedPosts(allPosts).filter((post) => post.slug !== currentPost.slug);

  const rankedPosts = publishedPosts
    .map((post) => {
      let score = 0;

      if (post.data.category === currentPost.data.category) {
        score += 3;
      }

      if (relatedSlugSet.has(post.slug)) {
        score += 6;
      }

      const sharedTags = post.data.tags.filter((tag) => currentPost.data.tags.includes(tag)).length;
      score += sharedTags;

      return { post, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return right.post.data.publishDate.getTime() - left.post.data.publishDate.getTime();
    });

  const primaryMatches = rankedPosts.slice(0, limit).map((entry) => entry.post);

  if (primaryMatches.length === limit) {
    return primaryMatches;
  }

  const usedSlugs = new Set(primaryMatches.map((post) => post.slug));
  const fallbackPosts = publishedPosts
    .filter((post) => !usedSlugs.has(post.slug))
    .slice(0, limit - primaryMatches.length);

  return [...primaryMatches, ...fallbackPosts];
}
