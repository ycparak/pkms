import type { Writing } from '$lib/types';

export const prerender = true;

export async function load({ fetch }) {
	const response = await fetch('api/writing');
	const posts: Writing[] = await response.json();
	return { posts };
}
