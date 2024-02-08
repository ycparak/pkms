import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../content/craft/${params.slug}.md`);
		return {
			post: post.default,
			meta: post.metadata
		};
	} catch {
		error(404, `Could not find "${params.slug}"`);
	}
}
