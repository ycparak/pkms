import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const post = await import(`../../../content/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (err) {
		throw error(404, 'Could not find post');
	}
}) satisfies PageLoad;
