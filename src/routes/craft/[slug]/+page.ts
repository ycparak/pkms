import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../content/projects/${params.slug}.md`);
		if (post.default.slug === '') throw new Error('Invalid link');

		console.log(JSON.stringify(post.default));

		return {
			project: post.default,
			meta: post.metadata
		};
	} catch {
		error(404, `Could not find "${params.slug}"`);
	}
}
