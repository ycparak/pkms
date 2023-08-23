<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  import { spring } from 'svelte/motion';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
  type Context = Writable<number>

  export let slides = [] as { href: string, title: string, date: string, button: string }[];
  export let slideIndex = 0;
  let screenWidth = getContext<Context>('screenWidth')
  let shouldSlide = true;
  let xPosition = spring(0, { 
    stiffness: 0.05,
    damping: 0.49,
  });

  $: {
    xPosition.set(slideIndex * -$screenWidth);
  }

  function wheel(e : Event) {
    if (shouldSlide) {
      shouldSlide = false;
      slide((e as WheelEvent).deltaX);
      setTimeout(() => shouldSlide = true, 1000);
    }
  }

  function slide(deltaX : number) {
    if (deltaX > 1 && slideIndex < slides.length - 1) {
      const newIndex = slideIndex + 1;
      dispatch('setActiveIndex', newIndex);
    } else if (deltaX < -1 && slideIndex > 0) {
      const newIndex = slideIndex - 1;
      dispatch('setActiveIndex', newIndex);
    }
  }
</script>

<div
  class="slides"
  on:wheel|preventDefault={wheel}
  style="transform: translate3d({$xPosition}px, 0px, 0px);">
  {#each slides as slide, index}
    <div id="slide-{index}" class="slide">
      <div class="img">{index + 1}</div>
    </div>
  {/each}
</div>

<style lang="scss">
  .slides {
    flex-grow: 1;
    display: flex;
    flex-wrap: nowrap;
  }
  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;
    flex-shrink: 0;
    .img {
      width: 768px;
      aspect-ratio: 16 / 9;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: rgba(0, 0, 0, 0.002) 0px 0.7px 0.7px, rgba(0, 0, 0, 0.005) 0px 1.9px 1.9px, rgba(0, 0, 0, 0.012) 0px 3.6px 3.6px, rgba(0, 0, 0, 0.02) 0px 6.3px 6.3px, rgba(0, 0, 0, 0.035) 0px 11px 11px, rgba(0, 0, 0, 0.1) 0px 20.2px 20.2px, rgba(0, 0, 0, 0.125) 0px 40px 40px;
    }
  }
</style>