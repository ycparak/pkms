import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import sequence from 'svelte-sequential-preprocessor';
import { mdsvex, escapeSvelte } from 'mdsvex';
// import shiki from 'shiki';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	/* layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'poimandres' });
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
			return `{@html \`${html}\` }`;
		}
	}, */
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: sequence([
		preprocess({
			scss: {
				prependData: '@use "src/styles/_functions.scss"; @use "src/styles/_mixins.scss" as mixins;'
			}
		}),
		mdsvex(mdsvexOptions)
	]),

	kit: {
		adapter: adapter(),
		alias: {
			$assets: './src/assets',
			$components: './src/components',
			$content: './src/content',
			$routes: './src/routes',
			$styles: './src/styles'
		}
	}
};

export default config;
