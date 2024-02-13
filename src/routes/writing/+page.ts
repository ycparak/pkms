import type { Writing } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('/writing');
	const posts: Writing[] = await response.json();
	return { posts };
}
