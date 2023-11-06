<script lang="ts">
  import * as config from '$lib/config'
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  import { spring } from 'svelte/motion';
	import { Slide } from '$components'
	import type { LayoutData } from './$types';

  // Context
  type Context = Writable<number>
  let index = getContext<Context>('index')
  let screenWidth = getContext<Context>('screenWidth')
  
  // Layout data
	export let data: LayoutData;
  const items = data.items;

  // State
  let shouldSlide = true;
  let initialKeypress = true;
	let isRubberBanding = false;
  let mainSpring = spring(0, { 
    stiffness: 0.075,
    damping: 0.8,
    precision: 0,
  });

  $: mainSpring.set($index);
  $: xPosSlides = $mainSpring * -$screenWidth;

  function keydown(event: KeyboardEvent) {
    const isArrowRight = event.key === 'ArrowRight';
    const isArrowLeft = event.key === 'ArrowLeft';
    if (!(isArrowRight || isArrowLeft)) return;

    const maxRubberBandDistance = 0.03;
    const step = isArrowRight ? 1 : -1;
		const positionTolerance = 0.05;
    const isRubberBandRegion = $mainSpring < positionTolerance || $mainSpring > items.length - 1 - positionTolerance;

    if (isArrowRight && $index < items.length - 1 || isArrowLeft && $index > 0) {
      index.set($index += step);
    } else if (initialKeypress && isRubberBandRegion) {
      isRubberBanding = true;
      mainSpring.set($mainSpring + (step * maxRubberBandDistance));
    }

    initialKeypress = false;
}

  function keyup(event : KeyboardEvent) {
    if (!isRubberBanding && !(event.key === 'ArrowRight' || event.key === 'ArrowLeft')) return;
    isRubberBanding = false;
    mainSpring.set($index);
    initialKeypress = true;
  }

  function wheel(e : Event) {
    const deltaX = (e as WheelEvent).deltaX;
    if (shouldSlide) {
      shouldSlide = false;
      if (deltaX > 1 && $index < items.length - 1) index.set($index += 1);
      else if (deltaX < -1 && $index > 0) index.set($index -= 1);
      setTimeout(() => shouldSlide = true, 1000);
    }
  }
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<div
  class="slides"
  on:wheel|preventDefault={wheel}
  style="transform: translate3d({xPosSlides}px, 0px, 0px);">
  {#each items as slide, i}
    <Slide index={i} />
  {/each}
</div>

<!-- {#if $index !== 0}
<button
  on:click={() => index.set($index -= 1)}
  disabled={$index === 0}
  class="button-left button-primary button-icon">
  <div class="inner"><i class="icon ph-bold ph-arrow-left"></i></div>
</button>
{/if}
{#if $index !== items.length - 1}
<button
  on:click={() => index.set($index += 1)}
  disabled={$index === items.length - 1}
  class="button-right button-primary button-icon">
  <div class="inner"><i class="icon ph-bold ph-arrow-right"></i></div>
</button>
{/if} -->

<svelte:window on:keydown={keydown} on:keyup={keyup} />

<style lang="scss">
  .slides {
    flex-grow: 1;
    display: flex;
    flex-wrap: nowrap;
  }
  /* .button-left {
    position: fixed;
    bottom: 22px;
    left: 22px;
  }
  .button-right {
    position: fixed;
    bottom: 22px;
    right: 22px;
  } */
</style>