import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import sequence from 'svelte-sequential-preprocessor';
import { preprocessMeltUI } from '@melt-ui/pp';
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
	preprocess: sequence([
		preprocess({
			scss: {
				prependData: '@use "src/styles/_functions.scss"; @use "src/styles/mixins" as mixins;'
			}
		}),
		mdsvex(mdsvexConfig),
		preprocessMeltUI()
	]),

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
