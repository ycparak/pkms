import { dev } from '$app/environment';

export const title = 'Yusuf Parak';
export const description = 'Design Engineer. Relentlessly trying to create perfect software.';
export const url = dev ? 'http://localhost:5173' : 'https://ycparak.com';

export const menu = [
	{
		title: 'Me',
		links: [
			{ name: 'Writing', href: '/writing', external: false, hide: false },
			{ name: 'Craft', href: '/craft', external: false, hide: false },
			{ name: 'Projects', href: '/projects', external: false, hide: false }
		]
	},
	{
		title: 'Resources',
		links: [
			{ name: 'Bookmarks', href: '/bookmarks', external: false, hide: false },
			{
				name: 'Site code',
				href: 'https://github.com/ycparak/ycparak',
				external: true,
				hide: false
			},
			{ name: 'RSS', href: '/rss', external: false, hide: false }
		]
	},
	{
		title: 'Say hello',
		links: [
			{ name: 'Email', href: 'mailto:yusuf@ycparak.com', external: true, hide: false },
			{ name: 'Twitter', href: 'https://twitter.com/ycparak', external: true, hide: false },
			{ name: 'Github', href: 'https://github.com/github', external: true, hide: false },
			{ name: 'Posts', href: 'https://posts.cv/yp', external: true, hide: false },
			{ name: 'Instagram', href: 'https://instagram.com/ycparak', external: true, hide: false },
			{ name: 'Read.cv', href: 'https://read.cv/yp', external: true, hide: true },
			{ name: 'LinkedIn', href: 'https://linkedin.com/in/ycparak', external: true, hide: true },
			{ name: 'Facebook', href: 'https://facebook.com/ycparak', external: true, hide: true },
			{ name: 'Threads', href: 'https://threads.net/ycparak', external: true, hide: true }
		]
	}
];
