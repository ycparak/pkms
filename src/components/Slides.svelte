<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  import { spring } from 'svelte/motion';
  import { createEventDispatcher } from 'svelte';
  import Slide from './Slide.svelte';

	const dispatch = createEventDispatcher();
  type Context = Writable<number>

  export let slides = [] as { href: string, title: string, date: string, button: string }[];
  export let slideIndex = 0;
  let screenWidth = getContext<Context>('screenWidth')
  let shouldSlide = true;
  let xPositionSpring = spring(0, { 
    stiffness: 0.05,
    damping: 0.49,
  });

  $: xPositionSpring.set(slideIndex * -$screenWidth);

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
  style="transform: translate3d({$xPositionSpring}px, 0px, 0px);">
  {#each slides as slide, index}
    <Slide index={index} />
  {/each}
</div>

<style lang="scss">
  .slides {
    flex-grow: 1;
    display: flex;
    flex-wrap: nowrap;
    cursor: grab;
  }
</style>