import type { Post } from '$lib/types';

export async function load({ fetch, url }) {
	// Fetch posts
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();

	// TODO: Remove later
	const { pathname } = url;

	return {
		pathname,
		posts
	};
}
