<script lang="ts">
	import MetaTitle from '$components/interface/MetaTitle.svelte';
	import MetaBack from '$components/interface/MetaBack.svelte';
	import MetaCopy from '$components/interface/MetaCopy.svelte';
	import MetaDescription from '$components/interface/MetaDescription.svelte';
	import MetaActions from '$components/interface/MetaActions.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
	const meta = data.meta;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<MetaTitle
	isDarkMode={true}
	title={meta.title} />

<MetaBack isDarkMode={true} />
<MetaCopy isDarkMode={true} />

{#if meta.codeLink}
	<MetaActions
		isDarkMode={true}
		link={meta.codeLink}
		icon="github-logo" />
{/if}

<MetaDescription
	isDarkMode={true}
	date={meta.date}
	project={meta.project}
	description={meta.description} />

<svelte:component this={data.project} />