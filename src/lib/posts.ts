import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Create a slug for tags and paths using lowercase letters, numbers, and hyphens. */
export function slugify(value: string): string {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)+/g, '');
}

/** Estimate reading time in minutes from the body word count. */
export function readingTime(body: string | undefined): number {
	const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

/**
 * Return published posts in reverse chronological order.
 * Drafts are hidden only in production builds and remain visible during development.
 */
export async function getPublishedPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) =>
		import.meta.env.PROD ? !data.draft : true,
	);
	return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export interface TagInfo {
	name: string;
	slug: string;
	count: number;
}

/** Collect tags from all posts and sort them by post count. */
export function collectTags(posts: Post[]): TagInfo[] {
	const map = new Map<string, TagInfo>();
	for (const post of posts) {
		for (const name of post.data.tags) {
			const slug = slugify(name);
			const existing = map.get(slug);
			if (existing) existing.count += 1;
			else map.set(slug, { name, slug, count: 1 });
		}
	}
	return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
