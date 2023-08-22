<script lang="ts">
  import * as config from '$lib/config'
	import { Slides } from '$components'

	const links = [
    { date: '2023-08-16', href: 'link-preview', title: 'Link Preview', button: 'View prototype ⏵' },
    { date: '2023-08-14', href: 'table-of-contents', title: 'Table of Contents', button: 'View essay ⏵' },
    { date: '2023-06-21', href: 'bionic-reading', title: 'Bionic Reading', button: 'View prototype ⏵' },
    { date: '2023-06-01', href: 'radial-menu', title: 'Radial Menu', button: 'View essay ⏵' },
    { date: '2023-02-15', href: 'color-picker', title: 'Colour Picker', button: 'View prototype ⏵' },
    { date: '2022-08-06', href: 'boolean-search', title: 'Boolean Search', button: 'View essay ⏵' },
    { date: '2022-02-12', href: 'magnified-doc', title: 'Magnified Doc', button: 'View prototype ⏵' },
    { date: '2021-12-16', href: 'animated-counter', title: 'Animated Counter', button: 'View essay ⏵' },
    { date: '2022-02-12', href: 'craft-slider', title: 'Craft Slider', button: 'View prototype ⏵' },
  ]
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<Slides slides={links} />

<style lang="scss">
</style>