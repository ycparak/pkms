import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import sequence from 'svelte-sequential-preprocessor';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
	extensions: ['.md']
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
		mdsvex(mdsvexConfig)
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
