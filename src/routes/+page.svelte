<script lang="ts">
  import * as config from '$lib/config'
	import { NavTab, Slide } from '$components'
  import { spring } from 'svelte/motion';
  import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
  
  // Props
	export let data: LayoutData;
  const posts = data.posts;

  // State
  let slideSpring = spring(0, { 
    stiffness: 0.085,
    damping: 0.8,
    precision: 0.00001,
  });
  let sliderIndex = 0;
  let prevIndex = 0;
  let screenWidth = 0;
  let fontLoaded = false;
  let xPosNav = 0;
  let xPosSlides = 0;
  let nav: HTMLElement;
  let navItemOffsets = [-53] as number[];
  let navItemOpacities = Array(posts.length).fill(0.2) as number[];
  let slideScales = [1] as number[];
  let shouldStartDetectingGesture = true;
  let isCurrentlyDetectingGesture = false;
  let initialKeypress = true;
  let isDragging = false;
  let dragX = 0;
  let panVelocity = 0;
  let date = posts[sliderIndex].date;
  let showDescription = false;
  
  $: calcNavItemOffsets(nav, fontLoaded);
  $: calcNavItemOpacities(nav, $slideSpring);
  $: calcSlideScales($slideSpring);
  $: interpolateNav($slideSpring);
  $: interpolateSlides($slideSpring, screenWidth);
  $: date = setDate(sliderIndex);

  // Lifecycle
  onMount(() => {
    if (window.location.hash) setIndexBasedOnHash();
    document.fonts.ready.then(() => {
      fontLoaded = true;
    });
  });

  // Methods
  function setIndexBasedOnHash() {
    const hash = window.location.hash;
    const slug = '/' + hash.split('#')[1];
    const index = posts.findIndex((post) => post.slug === slug);
    if (index > -1) {
      sliderIndex = index;
      slideSpring.set(index);
    }
  }

  function calcNavItemOffsets(nav : HTMLElement, fontLoaded: boolean) {
    if (!nav || !fontLoaded) return;
    
    let tabs = Array.from(nav.children);
    let tabWidths = [] as number[];
    let tabWidthsCumulative = [] as number[];
    
    tabs.forEach((tab, i) => {
      tabWidths[i] = tab.getBoundingClientRect().width;
      tabWidthsCumulative[i] = tabWidths[i] + (tabWidthsCumulative[i - 1] || 0);
      let offset = -(tabWidthsCumulative[i] - (tabWidths[i] / 2));
      navItemOffsets[i] = Math.round(offset);
    });

    xPosNav = navItemOffsets[sliderIndex];
  }

  function interpolateNav(slideSpring : number) {
    if (prevIndex === sliderIndex && !isDragging) return navItemOffsets[sliderIndex];

    // Hacky fix to get interpolation working on first load for first and last elements when dragging
    if (isDragging && sliderIndex === 0 && prevIndex === 0) prevIndex = sliderIndex + 1;
    if (isDragging && sliderIndex === posts.length - 1 && prevIndex === posts.length - 1) prevIndex = posts.length - 1;

    const prevOffset = navItemOffsets[prevIndex];
    const nextOffset = navItemOffsets[sliderIndex];
    const slideSpringPercentage = progressPercentage(slideSpring, prevIndex, sliderIndex);
    xPosNav = prevOffset + (nextOffset - prevOffset) * slideSpringPercentage;
  }

  function interpolateSlides(slideSpring : number, width : number) {
    xPosSlides = slideSpring * -width;
  }

  function calcNavItemOpacities(nav : HTMLElement, slideSpring : number) {
    if (!nav) return;
    
    let tabs = Array.from(nav.children);
    let tabOpacities = [] as number[];

    tabs.forEach((tab, i) => {
      let opacity = 1 - Math.abs(slideSpring - i);
      tabOpacities[i] = opacity < 0.2 ? 0.2 : opacity;
    });

    navItemOpacities = tabOpacities;
  }

  function calcSlideScales(slideSpring : number) {
    // Scale slides based on distance from current slide from 0.45 to 1
    let scales = [] as number[];
    posts.forEach((post, i) => {
      let scale = 1 - Math.abs(slideSpring - i) * 0.2;
      scales[i] = scale < 0.3 ? 0.3 : scale;
    });
    slideScales = scales;
  }

  function progressPercentage(value : number, startValue : number, endValue : number) {
    return (value - startValue) / (endValue - startValue);
  };

  function setDate(tabActive : number) {
    const newDate = new Date(posts[tabActive].date);
    // return `${(newDate.getMonth() + 1).toString().padStart(2, '0')}.${newDate.getFullYear()}`;
    return `${newDate.getFullYear()}`;
  }

  function getHref(slug : string) {
    return slug === '/' ? slug : '#' + slug.split('/')[1];
  }

  function goToSlide(nextIndex : number) {
    if (nextIndex < 0 || nextIndex > posts.length - 1) return;
    prevIndex = sliderIndex;
    sliderIndex = nextIndex;
    slideSpring.set(sliderIndex);
    const href = getHref(posts[nextIndex].slug);
    if (sliderIndex === 0) window.history.pushState({}, '', window.location.pathname);
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

  function passedDragDistanceTolerance() {
    const interpolationDelta = $slideSpring - sliderIndex;
    const passedDistanceTolerance = Math.abs(interpolationDelta) > 0.5;
    return passedDistanceTolerance;
  }

  function shouldDragAdvance() {
    const interpolationDelta = $slideSpring - sliderIndex;
    const passedVelocityTolerance = Math.abs(panVelocity) > 3;
    const swipingTowardsCurrentSlide = (interpolationDelta < 0 && panVelocity > 0) || (interpolationDelta > 0 && panVelocity < 0);
    const swipeDirectionIsRight = panVelocity < 0;

    if ((sliderIndex === 0 && swipeDirectionIsRight) && (passedDragDistanceTolerance() || passedVelocityTolerance)) return true;
    else if ((sliderIndex === posts.length - 1 && !swipeDirectionIsRight) && (passedDragDistanceTolerance() || passedVelocityTolerance)) return true;
    else if (!isRubberBandRegion() && (passedDragDistanceTolerance() || (swipingTowardsCurrentSlide && passedVelocityTolerance))) return true;
    else return false;
  }

  function dragToNextSlide() {
    let directionIsForward = sliderIndex <= $slideSpring;
    let targetIndex = directionIsForward ? Math.ceil($slideSpring) : Math.floor($slideSpring);
    goToSlide(targetIndex);
    isDragging = false;
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
      // Rubber banding
      const maxRubberBandDistance = 0.03;
      slideSpring.set($slideSpring + (step * maxRubberBandDistance));
    }

    initialKeypress = false;
  }

  function keyup(event : KeyboardEvent) {
    // Stop rubber banding if user releases key
    if (!(event.key === 'ArrowRight' || event.key === 'ArrowLeft')) return;
    slideSpring.set(sliderIndex);
    initialKeypress = true;
  }

  function wheel(deltaX: number) {
    const threshold = 7.5;
    if (Math.abs(deltaX) < threshold) return;

    if (shouldStartDetectingGesture) {
      shouldStartDetectingGesture = false;
      isCurrentlyDetectingGesture = true;

      setTimeout(async function () {
        isCurrentlyDetectingGesture = false;

        if (deltaX > 0 && sliderIndex < posts.length - 1) next();
        else if (deltaX < 0 && sliderIndex > 0)  prev();
        slideSpring.set(sliderIndex);
        
        setTimeout(function () {
          shouldStartDetectingGesture = true;
        }, 1000);
      }, 150);
    }

    if (isCurrentlyDetectingGesture) {
      if (deltaX > 0 && sliderIndex === posts.length - 1) slideSpring.set($slideSpring + 0.1);
      else if (deltaX < 0 && sliderIndex === 0) slideSpring.set($slideSpring - 0.1);
    }
  }

  function startDragging(x: number) {
    isDragging = true;
    dragX = x;
  }

  function continueDragging(x: number) {
    if (!isDragging) return;

    panVelocity = x - dragX;
    dragX = x;

    const springValue = $slideSpring;
    let progress = progressPercentage(panVelocity, 0, -screenWidth);
    if (springValue + progress < 0 || springValue + progress > posts.length - 1) progress *= 0.5; // Rubber banding
    slideSpring.update((n) => n + progress);

    if (passedDragDistanceTolerance() && shouldDragAdvance()) dragToNextSlide();
  }

  function stopDragging() {
    if (!isDragging) return;

    if (shouldDragAdvance()) dragToNextSlide();
    else slideSpring.set(sliderIndex);

    isDragging = false;
  }
</script>

<!-- Head -->
<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<main>
  <!-- SLideshow meta -->
  <header>
    <div class="meta">
      <button
        on:click={() => showDescription = !showDescription}
        class="meta-button"
        class:active={showDescription}>
        <div class="meta-button-icon"></div>
        <span><time>{date}</time> &middot; {posts[sliderIndex].project}</span>
      </button>
      {#if showDescription}
        <p
          transition:fade={{ delay: 0, duration: 300 }}
          class="meta-description"
          class:active={showDescription}>
          {posts[sliderIndex].description}
        </p>
      {/if}
    </div>
    {#if posts[sliderIndex].hasLink && posts[sliderIndex].linkTitle}
      <a
        transition:fade={{ delay: 200, duration: 300 }}
        href="{posts[sliderIndex].link ? posts[sliderIndex].link : posts[sliderIndex].slug}"
        class="action"
        class:external="{posts[sliderIndex].link}"
        target="{posts[sliderIndex].link ? '_blank' : '_self'}"
        draggable="false">
        <span>{posts[sliderIndex].linkTitle}</span>
        <i class="ph-bold ph-arrow-right action-icon"></i>
      </a>
    {/if}
  </header>
  
  <!-- Slideshow -->
  <section
    class="slideshow"
    class:dragging={isDragging}
    style="transform: translate3d({xPosSlides}px, 0px, 0px);"
    role="slider"
    tabindex="0"
    aria-valuenow="{sliderIndex}"
    on:mousedown={(e) => startDragging(e.clientX)}
    on:mousemove={(e) => continueDragging(e.clientX)}
    on:mouseup={stopDragging}
    on:mouseleave={stopDragging}
    on:touchstart={(e) => startDragging(e.touches[0].pageX)}
    on:touchmove|preventDefault={(e) => continueDragging(e.touches[0].pageX)}
    on:touchend={stopDragging}
    on:touchcancel={stopDragging}>
    {#each posts as post, index}
      <Slide {post} scale={slideScales[index]} />
    {/each}
  </section>

  <!-- Slideshow Nav -->
  <footer bind:this={nav} style="transform: translate3d({xPosNav}px, 0px, 0px)">
    {#each posts as link, index}
      <NavTab
        href={getHref(link.slug)}
        title={link.title}
        opacity={navItemOpacities[index]}
        on:select={() => goToSlide(index)}
      />
    {/each}
  </footer>
</main>

<svelte:window
  bind:innerWidth={screenWidth}
  on:keydown={keydown}
  on:keyup={keyup}
  on:wheel={(e) => wheel(e.deltaX)}
  on:contextmenu={stopDragging}
/>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100dvw;
    max-height: 100dvh;
    max-width: 100dvw;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: functions.toRem(24px) functions.toRem(24px) 0 functions.toRem(24px);
    min-height: functions.toRem(30px);
    .meta {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      &-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        @include mixins.interface-type-sm;
        height: fit-content;
        color: var(--color-text-accent);
        transition: all .3s ease;
        &-icon {
          width: functions.toRem(5px);
          height: functions.toRem(5px);
          border-radius: 50%;
          background-color: var(--color-text-accent);
          margin-right: functions.toRem(8px);
          animation: flash 2s infinite;
          transition: all .3s ease;
        }
        time {
          font-variant-numeric: tabular-nums;
        }

        &.active {
          color: var(--color-text);
          .meta-button-icon {
            background-color: var(--color-text);
            animation: none;
          }
        }

        &:hover {
          color: var(--color-text);
          .meta-button-icon {
            background-color: var(--color-text);
            animation: none;
          }
        }
      }
      &-description {
        position: absolute;
        top: functions.toRem(12px);
        background-color: var(--color-translucent);
        backdrop-filter: blur(20px);
        padding: functions.toRem(8px) functions.toRem(13px) functions.toRem(10px);
        z-index: 20;
        border-radius: functions.toRem(8px);
        border: 1px solid var(--color-background);
        display: block;
        font-size: functions.toRem(13.9276px);;
        line-height: 1.35;
        color: var(--color-text-accent);
        min-width: 288px;
        opacity: 0;
        transition: all .3s ease;
        transition-delay: 1s;
        &.active {
          transition: all .3s ease;
          transition-delay: 1s;
          opacity: 1;
        }
      }
    }
    .action {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: var(--color-text-accent);
      text-decoration: none;
      @include mixins.interface-type-sm;
      transition: all .3s ease;
      height: fit-content;
      &-icon {
        height: functions.toRem(10px);
        margin-left: functions.toRem(8px);
      }
      &.external {
        .action-icon {
          transform: translateY(functions.toRem(1px)) rotate(-45deg);
        }
      }
      &:hover {
        color: var(--color-text);
      }
    }
  }

  section {
    flex-grow: 1;
    display: flex;
    flex-wrap: nowrap;
    border: none;
    cursor: grab;
    height: 100%;
    width: 100%;
    will-change: transform;
    &.dragging {
      cursor: grabbing;
    }
    &:focus {
      outline: none;
    }
  }

  footer {
    position: relative;
    left: 50%;
    display: flex;
    margin-bottom: functions.toRem(32px);
    white-space: nowrap;
    backface-visibility: hidden;
  }
</style>