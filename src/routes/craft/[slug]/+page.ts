import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../content/projects/${params.slug}.md`);
		if (!post.link || post.link.isExternal) throw new Error('Invalid link');

		return {
			post: post.default,
			meta: post.metadata
		};
	} catch {
		error(404, `Could not find "${params.slug}"`);
	}
}
