<script lang="ts">
  import * as config from '$lib/config'
  import '$styles/main.scss'
  import "@phosphor-icons/web/regular";
  import "@phosphor-icons/web/bold";
  import "@phosphor-icons/web/fill";
  import { afterNavigate } from '$app/navigation';
  import { Nav, Guidelines } from '$components';
  import { runAnimation } from '$lib/stores';
	import type { LayoutData } from './$types';

  export let data: LayoutData;
  
  // Lifecycle hooks
  afterNavigate(() => {
    runAnimation.set(true);
  });
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<!-- <Guidelines /> -->
<slot />
<Nav path={data.url} />

<style lang="scss">
</style>