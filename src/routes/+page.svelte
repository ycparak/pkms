<script lang="ts">
  import * as config from '$lib/config'
	import { NavTab, Slide } from '$components'
  import { spring } from 'svelte/motion';
	import type { LayoutData } from './$types';
	import { browser } from '$app/environment';
  
	export let data: LayoutData;
  const posts = data.posts;

  // Global state
  let sliderIndex = 0;
  if (browser && window.location.hash) {
    const hash = window.location.hash;
    const slug = '/' + hash.split('#')[1];
    const index = posts.findIndex((post) => post.slug === slug);
    if (index > -1) sliderIndex = index;
  }

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
  let screenWidth = 0;
  let shouldSlide = true;
  let initialKeypress = true;
	let isRubberBanding = false;
  $: slideSpring.set(sliderIndex);
  $: xPosSlides = $slideSpring * -screenWidth;

  // Methods
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

    // Update URL hash
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

  // Events
  function keydown(event: KeyboardEvent) {
    const isArrowRight = event.key === 'ArrowRight';
    const isArrowLeft = event.key === 'ArrowLeft';
    if (!(isArrowRight || isArrowLeft)) return;

    const step = isArrowRight ? 1 : -1;
    const positionTolerance = 0.05;
    const maxRubberBandDistance = 0.03;
    const isRubberBandRegion = $slideSpring < positionTolerance || $slideSpring > posts.length - 1 - positionTolerance;

    if (isArrowRight && sliderIndex < posts.length - 1 || isArrowLeft && sliderIndex > 0) {
      isArrowRight ? next() : prev();
    } else if (initialKeypress && isRubberBandRegion) {
      isRubberBanding = true;
      slideSpring.set($slideSpring + (step * maxRubberBandDistance));
    }

    initialKeypress = false;
  }

  function keyup(event : KeyboardEvent) {
    if (!isRubberBanding && !(event.key === 'ArrowRight' || event.key === 'ArrowLeft')) return;
    isRubberBanding = false;
    slideSpring.set(sliderIndex);
    initialKeypress = true;
  }

  function wheel(e : Event) {
    const deltaX = (e as WheelEvent).deltaX;

    if (shouldSlide && Math.abs(deltaX) > 5) {
      shouldSlide = false;
      if ((deltaX > 0 && sliderIndex < posts.length - 1) || (deltaX < 0 && sliderIndex > 0)) {
        deltaX > 0 ? next() : prev();
        setTimeout(() => shouldSlide = true, 700);
      }
    }
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
  on:wheel={wheel} />

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