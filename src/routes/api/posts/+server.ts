import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/content/**/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		let slug = path.split('/').at(-1)?.replace('.md', '');
		slug = `/${slug}`;

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			posts.push(post);
		}
	}

	// Sort posts by date
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	// Find post with slug 'homepage' and move it to the front
	const homepageIndex = posts.findIndex((post) => post.slug === '/homepage');
	if (homepageIndex > -1) {
		const homepage = posts.splice(homepageIndex, 1)[0];
		posts.unshift(homepage);
	}

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
