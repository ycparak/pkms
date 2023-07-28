import type { LayoutLoad } from './$types';

export const load = (async ({ url }) => {
	const { pathname } = url;

	return {
		pathname
	};
}) as LayoutLoad;
