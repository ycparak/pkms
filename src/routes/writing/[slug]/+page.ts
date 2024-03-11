import type { Writing } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		const response = await fetch('/api/writing');
		const posts: Writing[] = await response.json();
		const post = await import(`../../../content/writing/${params.slug}.md`);

		let previousPost = null;
		let nextPost = null;
		const index = posts.findIndex((p: Writing) => p.slug === params.slug);
		if (index > -1) {
			nextPost = posts[index - 1] || null;
			previousPost = posts[index + 1] || null;
		}

		return {
			post: post.default,
			meta: post.metadata,
			previousPost,
			nextPost,
			posts
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
