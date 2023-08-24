<script lang="ts">
  import * as config from '$lib/config'
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  import { spring } from 'svelte/motion';
	import { Nav, Slide } from '$components'

  type Context = Writable<number>
  let screenWidth = getContext<Context>('screenWidth')
	const items = [
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

  let index = 0;
  let shouldSlide = true;
  let initialKeypress = true;
	let isRubberBanding = false;
  let mainSpring = spring(0, { 
    stiffness: 0.075,
    damping: 0.8,
    precision: 0,
  });

  $: mainSpring.set(index);
  $: xPosSlide = $mainSpring * -$screenWidth;

  function setActiveIndex(event : CustomEvent) {
    index = event.detail;
  }

  function keydown(event: KeyboardEvent) {
    const isArrowRight = event.key === 'ArrowRight';
    const isArrowLeft = event.key === 'ArrowLeft';
    if (!(isArrowRight || isArrowLeft)) return;

    const maxRubberBandDistance = 0.03;
    const step = isArrowRight ? 1 : -1;
		const positionTolerance = 0.05;
    const isRubberBandRegion = $mainSpring < positionTolerance || $mainSpring > items.length - 1 - positionTolerance;

    if (isArrowRight && index < items.length - 1 || isArrowLeft && index > 0) {
      index += step;
    } else if (initialKeypress && isRubberBandRegion) {
      isRubberBanding = true;
      mainSpring.set($mainSpring + (step * maxRubberBandDistance));
    }

    initialKeypress = false;
}

  function keyup(event : KeyboardEvent) {
    if (!isRubberBanding && !(event.key === 'ArrowRight' || event.key === 'ArrowLeft')) return;
    isRubberBanding = false;
    mainSpring.set(index);
    initialKeypress = true;
  }

  function wheel(e : Event) {
    const deltaX = (e as WheelEvent).deltaX;
    if (shouldSlide) {
      shouldSlide = false;
      if (deltaX > 1 && index < items.length - 1) index++;
      else if (deltaX < -1 && index > 0) index--;
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

<!-- mainSpring={$mainSpring} -->
<Nav
  links={items}
  tabActive={index}
  on:setActiveTab={setActiveIndex} />

<div
  class="slides"
  on:wheel|preventDefault={wheel}
  style="transform: translate3d({xPosSlide}px, 0px, 0px);">
  {#each items as slide, index}
    <Slide index={index} />
  {/each}
</div>

{#if index !== 0}
<button
  on:click={() => index--}
  disabled={index === 0}
  class="button-left button-primary button-icon">
  <div class="inner"><i class="icon ph-bold ph-arrow-left"></i></div>
</button>
{/if}

{#if index !== items.length - 1}
<button
  on:click={() => index++}
  disabled={index === items.length - 1}
  class="button-right button-primary button-icon">
  <div class="inner"><i class="icon ph-bold ph-arrow-right"></i></div>
</button>
{/if}

<div class="fader left"></div>
<div class="fader right"></div>
<svelte:window on:keydown={keydown} on:keyup={keyup} />

<style lang="scss">
  .slides {
    flex-grow: 1;
    display: flex;
    flex-wrap: nowrap;
    cursor: grab;
  }
  .fader {
    position: fixed;
    top: 22px;
    width: 100px;
    height: 32px;
    pointer-events: none;
    z-index: 98;
    &.left {
      --start: calc(22px + 32px);
      --width: calc(var(--start) + 100px);
      width: var(--width);
      background: linear-gradient(to right, rgba(245, 243, 243, 1) var(--start), rgba(245, 243, 243, 0));
    }
    &.right {
      right: 0;
      background: linear-gradient(to left, rgba(245, 243, 243, 1), rgba(245, 243, 243, 0));
    }
  }

  .button-left {
    position: fixed;
    bottom: 22px;
    left: 22px;
  }
  .button-right {
    position: fixed;
    bottom: 22px;
    right: 22px;
  }
</style>