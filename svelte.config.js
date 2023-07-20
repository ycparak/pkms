import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: '@use "src/styles/_functions.scss"; @use "../styles/mixins" as mixins;'
		}
	}),

	kit: {
		adapter: adapter(),
		alias: {
			$routes: './src/routes',
			$components: './src/components',
			$styles: './src/styles'
		}
	}
};

export default config;
