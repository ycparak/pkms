import type { Post } from '$lib/types';

export async function load({ fetch, url }) {
	const { pathname } = url;

	// Fetch posts
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();

	return {
		pathname,
		posts
	};
}
