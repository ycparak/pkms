import type { LayoutLoad } from './$types';

export const load = (async ({ url }) => {
	const { pathname } = url;

	const items = [
		{ date: '2023-08-16', href: 'link-preview', title: 'yusuf parak', button: 'View prototype ⏵' },
		{
			date: '2023-08-14',
			href: 'table-of-contents',
			title: 'pinched',
			button: 'View essay ⏵'
		},
		{
			date: '2023-06-21',
			href: 'bionic-reading',
			title: 'redacted app',
			button: 'View prototype ⏵'
		},
		{
			date: '2023-06-01',
			href: 'rauno-radial-menu',
			title: 'rauno’s radial menu',
			button: 'View essay ⏵'
		},
		{
			date: '2022-08-06',
			href: 'boolean-search',
			title: 'hn.shortcut',
			button: 'View essay ⏵'
		},
		{
			date: '2023-02-15',
			href: 'color-picker',
			title: 'boolean search',
			button: 'View prototype ⏵'
		},
		{
			date: '2022-02-12',
			href: 'magnified-doc',
			title: 'pinched landing page',
			button: 'View prototype ⏵'
		},
		{
			date: '2021-12-16',
			href: 'animated-counter',
			title: 'blog experiment',
			button: 'View essay ⏵'
		},
		{
			date: '2022-02-12',
			href: 'craft-slider',
			title: 'canary graph view',
			button: 'View prototype ⏵'
		},
		{
			date: '2022-02-12',
			href: 'craft-slider',
			title: 'canary copy & paste',
			button: 'View prototype ⏵'
		}
	];

	return {
		pathname,
		items
	};
}) as LayoutLoad;
