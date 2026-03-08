import { defineCollection, z } from 'astro:content';

import { categorySlugs } from '../data/categories';

const guideSectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  slugs: z.array(z.string()).default([]),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10),
    description: z.string().min(50).max(180),
    excerpt: z.string().optional(),
    category: z.enum(categorySlugs),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    affiliate: z.boolean().default(false),
    featured: z.boolean().default(false),
    popular: z.boolean().default(false),
    author: z.string().default('Urban Harvest Lab Editorial'),
    keyTakeaways: z.array(z.string()).default([]),
    beginnerPathTitle: z.string().optional(),
    beginnerPathSlugs: z.array(z.string()).default([]),
    topicLinksTitle: z.string().optional(),
    topicLinksDescription: z.string().optional(),
    topicLinkSlugs: z.array(z.string()).default([]),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),
    comparisonTable: z
      .object({
        caption: z.string().optional(),
        columns: z.array(z.string()).min(2),
        rows: z.array(z.array(z.string())).min(1),
      })
      .optional(),
    diagnosis: z
      .object({
        symptoms: z.array(z.string()).default([]),
        possibleCauses: z.array(z.string()).default([]),
        quickFixes: z.array(z.string()).default([]),
      })
      .optional(),
    relatedSlugs: z.array(z.string()).default([]),
  }),
});

// Hub metadata carries editorial grouping state so hub pages and category archives stay in sync.
const hubs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().min(50).max(180),
    overview: z.string().min(100),
    category: z.enum(categorySlugs),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    introLabel: z.string().default('Topic hub'),
    guideSections: z.array(guideSectionSchema).min(1),
    featuredSlugs: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog,
  hubs,
};
