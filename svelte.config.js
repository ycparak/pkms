import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
	extensions: ['.md']
	// smartypants: true
	/* layout: {
		blog: './src/routes/blog/_layout.svelte'
	},
	remarkPlugins: [],
	rehypePlugins: [] */
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/styles/_functions.scss"; @use "../styles/mixins" as mixins;'
			}
		}),
		// vitePreprocess(),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$content: './src/content',
			$routes: './src/routes',
			$styles: './src/styles'
		}
	}
};

export default config;
