<script lang="ts">
  import * as config from '$lib/config'
	import { NavTab, Slide } from '$components'
  import { spring } from 'svelte/motion';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
  
	export let data: LayoutData;
  const posts = data.posts;

  // Global state
  let sliderIndex = 0;
  let screenWidth = 0;
  let wheelTimeout: ReturnType<typeof setTimeout>;
  let shouldWheelSlide = true;
  let initialKeypress = true;

  // State nav
  let navSpring = spring(-70, { 
    stiffness: 0.075,
    damping: 0.8,
    precision: 0,
  });
  let nav: HTMLElement;
  let tabOffsets = [-70] as number[];
  let date = posts[sliderIndex].date;
  $: calcTabOffsets(nav);
  $: navSpring.set(tabOffsets[sliderIndex]);
  $: setDate(sliderIndex);

  // State slider
  let slideSpring = spring(0, { 
    stiffness: 0.075,
    damping: 0.8,
    precision: 0,
  });
  $: slideSpring.set(sliderIndex);
  $: xPosSlides = $slideSpring * -screenWidth;

  // Lifecycle
  onMount(() => {
    if (window.location.hash) setIndexBasedOnHash();
  });

  // Methods
  function setIndexBasedOnHash() {
    const hash = window.location.hash;
    const slug = '/' + hash.split('#')[1];
    const index = posts.findIndex((post) => post.slug === slug);
    if (index > -1) sliderIndex = index;
  }

  async function calcTabOffsets(nav : HTMLElement) {
    if (!nav) return;
    
    let tabs = Array.from(nav.children);
    let tabWidths = [140.71875] as number[];
    let tabWidthsCumulative = [140.71875] as number[];
    
    tabs.forEach((tab, i) => {
      tabWidths[i] = tab.getBoundingClientRect().width;
      tabWidthsCumulative[i] = tabWidths[i] + (tabWidthsCumulative[i - 1] || 0);
      let offset = -(tabWidthsCumulative[i] - (tabWidths[i] / 2));
      tabOffsets[i] = Math.round(offset);
    });
  }

  function setDate(tabActive : number) {
    const newDate = new Date(posts[tabActive].date);
    date = `${(newDate.getMonth() + 1).toString().padStart(2, '0')}.${newDate.getFullYear()}`;
  }

  function getHref(slug : string) {
    return slug === '/' ? slug : '#' + slug.split('/')[1];
  }

  function goToSlide(index : number) {
    sliderIndex = index;
    const href = getHref(posts[index].slug);
    if (href === '/') window.history.pushState({}, '', window.location.pathname);
    else window.location.hash = href;
  }

  function next() {
    if (sliderIndex === posts.length - 1) return;
    goToSlide(sliderIndex + 1);
  }

  function prev() {
    if (sliderIndex === 0) return;
    goToSlide(sliderIndex - 1);
  }

  function isRubberBandRegion() {
    const positionTolerance = 0.05;
    return $slideSpring < positionTolerance || $slideSpring > posts.length - 1 - positionTolerance;
  }

  function rubberBand(step : number) {
    const maxRubberBandDistance = 0.03;
    slideSpring.set($slideSpring + (step * maxRubberBandDistance));
  }

  function stopRubberBanding() {
    slideSpring.set(sliderIndex);
    initialKeypress = true;
  }

  // Events
  function keydown(event: KeyboardEvent) {
    const isArrowRight = event.key === 'ArrowRight';
    const isArrowLeft = event.key === 'ArrowLeft';
    if (!(isArrowRight || isArrowLeft)) return;

    const step = isArrowRight ? 1 : -1;

    if (isArrowRight && sliderIndex < posts.length - 1 || isArrowLeft && sliderIndex > 0) {
      isArrowRight ? next() : prev();
    } else if (initialKeypress && isRubberBandRegion()) {
      rubberBand(step);
    }

    initialKeypress = false;
  }

  function keyup(event : KeyboardEvent) {
    if (!(event.key === 'ArrowRight' || event.key === 'ArrowLeft')) return;
    stopRubberBanding();
  }

  function wheel(e : Event) {
    const deltaX = (e as WheelEvent).deltaX;
    const threshold = 5;
    if (!shouldWheelSlide || Math.abs(deltaX) < threshold) return;

    shouldWheelSlide = false;
    const slideRight = deltaX > threshold && sliderIndex < posts.length - 1;
    const slideLeft = deltaX < threshold && sliderIndex > 0;
    if (slideRight || slideLeft) {
      slideRight ? next() : prev();
      setTimeout(() => shouldWheelSlide = true, 700);
    } else if (isRubberBandRegion()) {
      shouldWheelSlide = true;
      rubberBand(deltaX > 0 ? 1 : -1);
    }
  }

  function stopWheel() {
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(stopRubberBanding, 75);
  }
</script>

<!-- Head -->
<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<!-- Header -->
<header>
  <nav bind:this={nav} style="transform: translate3d({$navSpring}px, 0px, 0px)">
    {#each posts as link, index}
      <NavTab
        active={index === sliderIndex}
        href={getHref(link.slug)}
        title={link.title}
        tabOffset={tabOffsets[index]}
        tabActiveOffset={$navSpring}
        on:select={() => goToSlide(index)}
      />
    {/each}
  </nav>
  <time>{date}</time>
</header>

<!-- Slides -->
<div
  class="slides"
  style="transform: translate3d({xPosSlides}px, 0px, 0px);">
  {#each posts as post}
    <Slide {post} />
  {/each}
</div>

<svelte:window
  bind:innerWidth={screenWidth}
  on:keydown={keydown}
  on:keyup={keyup}
  on:wheel={wheel}
  on:wheel={stopWheel} />

<style lang="scss">
  header {
    height: fit-content;
    width: 100%;
    padding: functions.toRem(14px) 0;
    text-align: center;
    nav {
      position: relative;
      left: 50%;
      display: flex;
      white-space: nowrap;
      // will-change: transform;
      backface-visibility: hidden;
    }
    time {
      display: block;
      font-size: functions.toRem(12px);
      opacity: 0.4;
      line-height: 1;
      letter-spacing: -0.01em;
      font-variant-numeric: tabular-nums;
      padding: functions.toRem(2px) 0 0 0;
      margin: 0;
      user-select: none;
    }
  }
  .slides {
    flex-grow: 1;
    display: flex;
    flex-wrap: nowrap;
    background-color: var(--color-background);
    border: none;
    height: fit-content;
    // will-change: transform;
  }
</style>