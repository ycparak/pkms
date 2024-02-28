import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';
import type { Writing } from '$lib/types';

async function getWriting() {
	let posts: Writing[] = [];

	const srcPaths = import.meta.glob('/src/content/writing/*.md', { eager: true });

	for (const srcPath in srcPaths) {
		const file = srcPaths[srcPath];
		const slug = srcPath.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Writing, 'slug'>;
			const path = '/' + metadata.category + '/' + slug;
			const post = { ...metadata, slug, path } satisfies Writing;
			if (post.isDraft && !dev) continue;
			else posts.push(post);
		}
	}

	// Sort posts by date
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getWriting();
	return json(posts);
}
