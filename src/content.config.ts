
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
 * Blog post collection. The frontmatter is type-checked and validated.
 * Add articles to src/content/blog/ as .md or .mdx files (the theme user's content area).
 */
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			author: z.string().optional(),

			/** If true, the article is excluded from the list and detail pages in production builds. */
			draft: z.boolean().default(false),

			/** Optional hero image. Relative path from src/content/blog. */
			heroImage: image().optional(),
		}),
});

/*
 * Portfolio (project) collection. The body contains the case study.
 * Add projects to src/content/work/ as .md or .mdx files.
 */
const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),

			/** Main category used for filtering. */
			category: z.string(),

			/** Technologies / tech stack used. */
			tech: z.array(z.string()).default([]),

			year: z.number(),

			role: z.string().optional(),
			client: z.string().optional(),

			/** Published website or repository (optional). */
			url: z.string().url().optional(),
			repo: z.string().url().optional(),

			/** Optional thumbnail. If not provided, a gradient placeholder is displayed. */
			thumbnail: image().optional(),

			featured: z.boolean().default(false),

			/** Sort order (smaller numbers appear first). Ties are sorted by newest year first. */
			order: z.number().default(0),

			draft: z.boolean().default(false),
		}),
});

export const collections = { blog, work };

