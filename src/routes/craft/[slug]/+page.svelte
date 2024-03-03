<script lang="ts">
	import MetaDescription from '$components/interface/MetaDescription.svelte';
	import MetaActions from '$components/interface/MetaActions.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
	const meta = data.meta;
</script>

<MetaDescription
	isDarkMode={true}
	date={meta.date}
	project={meta.project}
	description={meta.description} />

{#if meta.codeLink}
	<MetaActions
		isDarkMode={true}
		link={meta.codeLink}
		icon="github-logo" />
{/if}

<svelte:component this={data.post} />