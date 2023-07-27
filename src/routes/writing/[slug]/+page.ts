import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../content/writing/${params.slug}.md`);
		console.log(post);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (err) {
		throw error(404, 'Could not find post');
	}
}
