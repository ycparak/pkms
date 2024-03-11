<script lang="ts">
  import * as config from '$lib/config'
  import '$styles/main.scss'
  import "@phosphor-icons/web/regular";
  import "@phosphor-icons/web/bold";
  import "@phosphor-icons/web/fill";
  // import Guidelines from '$components/interface/Guidelines.svelte';
  import Nav from '$components/interface/Nav.svelte';
  import { afterNavigate } from '$app/navigation';
  import { runAnimation, mousePos, path } from '$lib/stores';
	import type { LayoutData } from './$types';

  export let data: LayoutData;

  $: path.set(data.url);
  
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
<Nav path={data.url} />
<slot />

<svelte:window
  on:mousemove={(e) => {
    mousePos.set({ x: e.clientX, y: e.clientY });
  }}
/>