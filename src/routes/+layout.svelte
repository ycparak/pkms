<script lang="ts">
  import * as config from '$lib/config'
  import '$styles/main.scss'
  import "@phosphor-icons/web/regular";
  import "@phosphor-icons/web/bold";
  import "@phosphor-icons/web/fill";
  import { afterNavigate } from '$app/navigation';
  import { tweened } from 'svelte/motion';
	import { quadIn, circOut } from 'svelte/easing';
  import { Menu, AboutModal } from '$components';
  import { runAnimation } from '$lib/stores';
	import type { LayoutData } from './$types';

  export let data: LayoutData;

  afterNavigate(() => {
    runAnimation.set(true);
  });

  let aboutModal = false;
  const sizeConst = 0.06;

  const size = tweened(1, {
    duration: 250,
    easing: circOut
  });

  const blur = tweened(0, {
    duration: 200,
    easing: circOut
  });

  const opacity = tweened(0, {
    duration: 300,
    delay: 50,
    easing: circOut
  });

  const contentScale = tweened(1.07, {
    duration: 300,
    delay: 100,
    easing: circOut
  });

  const contentOpacity = tweened(0, {
    duration: 300,
    delay: 0,
    easing: quadIn
  });

  const contentBlur = tweened(3, {
    duration: 300,
    delay: 0,
    easing: quadIn
  });

  function showModal() {
    aboutModal = true;
    $size -= sizeConst;
    $blur = 20;
    $opacity = 1;
    $contentScale = 1;
    $contentOpacity = 1;
    $contentBlur = 0;
  }

  function hideModal() {
    aboutModal = false;
    $size += sizeConst;
    $blur = 0;
    $opacity = 0;
    $contentScale = 1.07;
    $contentOpacity = 0;
    $contentBlur = 3;
  }
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<Menu path="{data.url}" on:showModal={showModal} />
<div style="filter: blur({$blur}px); transform: scale({$size});">
  <slot />
</div>

{#if aboutModal}
	<AboutModal 
    opacity="{$opacity}"
    contentScale={$contentScale}
    contentOpacity={$contentOpacity}
    contentBlur={$contentBlur}
    on:close={hideModal} />
{/if}

<style lang="scss">
</style>