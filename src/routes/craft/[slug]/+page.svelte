<script lang="ts">
	import MetaDescription from '$components/interface/MetaDescription.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
	const meta = data.meta;
</script>

<MetaDescription
	date={meta.date}
	project={meta.project}
	description={meta.description} />

<svelte:component this={data.post} />