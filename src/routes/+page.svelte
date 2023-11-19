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
  const posts = data.posts;

  // State
  let shouldSlide = true;
  const positionTolerance = 0.05;
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

    const step = isArrowRight ? 1 : -1;
    const maxRubberBandDistance = 0.03;
    const isRubberBandRegion = $mainSpring < positionTolerance || $mainSpring > posts.length - 1 - positionTolerance;

    if (isArrowRight && $index < posts.length - 1 || isArrowLeft && $index > 0) {
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

    if (shouldSlide && Math.abs(deltaX) > 5) {
      shouldSlide = false;
      const step = deltaX > 0 ? 1 : -1;
      const maxRubberBandDistance = 0.03;
      const isRubberBandRegion = $mainSpring < positionTolerance || $mainSpring > posts.length - 1 - positionTolerance;

      if ((deltaX > 0 && $index < posts.length - 1) || (deltaX < 0 && $index > 0)) {
        index.set($index += step);
        setTimeout(() => shouldSlide = true, 700);
      } else if (isRubberBandRegion) {
        isRubberBanding = true;
        shouldSlide = true;
        mainSpring.set($mainSpring + (step * maxRubberBandDistance));
        setTimeout(() => {
          isRubberBanding = false;
          mainSpring.set($index);
        }, 1);
      }

      initialKeypress = false;
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
  style="transform: translate3d({xPosSlides}px, 0px, 0px);"
  on:wheel|preventDefault={wheel}>
  {#each posts as post, i}
    <Slide index={i} {post} />
  {/each}
</div>
<svelte:window on:keydown={keydown} on:keyup={keyup} />

<style lang="scss">
  .slides {
    flex-grow: 1;
    display: flex;
    flex-wrap: nowrap;
    background-color: var(--color-background);
    border: none;
    height: fit-content;
  }
</style>