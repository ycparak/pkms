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

export const projects = [
	{
		date: '2023',
		title: 'Svonner',
		link: 'https://svonner.ycparak.com',
		external: true,
		description:
			'Opinionated Svelte component library with a focus on notoriously complicated UI patterns and interactions.'
	},
	{
		date: '2022–2023',
		title: 'Pinched.io',
		link: 'https://pinched.io',
		linkBio: 'Founder',
		external: true,
		description:
			'A sourcing tool built on top of Twitter’s social graph. e.g. “Find all designers in LA following me or one of my investors”. Backed by Pioneer.'
	},
	{
		date: '2021',
		title: 'Bookmarks',
		link: 'https://ycparak.com/bookmarks',
		external: false,
		description:
			'A personally curated list of articles, essays, and videos that I’ve found interesting and would like to revisit.'
	},
	{
		date: '2020',
		title: 'Personal Knowledge Management System',
		link: 'https://ycparak.com/bookmarks',
		external: false,
		description:
			'A PKMS inspired by Roam Research and Andy Matuschak’s note taking system. Underpinning it is a CRM, notes app and task manager.'
	},
	{
		date: '2019–2021',
		title: 'Thinkst Canary',
		link: 'https://ycparak.com/bookmarks',
		linkBio: 'Design Engineer',
		external: false,
		description:
			'Canary helps security teams detect internal network breaches. I worked on redesigning and rebuilding the frontend console UI.'
	}
];
