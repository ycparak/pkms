import { json } from '@sveltejs/kit';
import type { Post, Category } from '$lib/types';

async function getPosts() {
	let posts: Post[] = [];

	const srcPaths = import.meta.glob('/src/content/**/*.md', { eager: true });

	for (const srcPath in srcPaths) {
		const file = srcPaths[srcPath];
		const slug = srcPath.split('/').at(-1)?.replace('.md', '');
		const category = srcPath.split('/').at(-2) as Category;

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const path = '/' + category + '/' + slug;
			const post = { ...metadata, category, slug, path } satisfies Post;
			// if post.isDraft is true and not in dev mode, skip
			// if (post.isDraft && process.env.NODE_ENV !== 'development') posts.push(post);
			posts.push(post);
		}
	}

	// Sort posts by date
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
