<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  import { tweened } from 'svelte/motion';

  type Context = Writable<number>

  export let index = 0;
  // export let xPosition = 0;
  let screenWidth = getContext<Context>('screenWidth')
  let slide : HTMLElement;
  let scaleSpring = tweened(1);

  /* $: {
    const slidePosition = index * $screenWidth;
    const xPositionCenter = Math.abs(xPosition) + ($screenWidth / 2);
    const slideCenter = Math.abs(slidePosition) + ($screenWidth / 2);
    const distanceFromCenter = xPositionCenter - slideCenter;
    const scale = 1 - (Math.abs(distanceFromCenter) / $screenWidth);
    const scaleValue = scale < 0.6 ? 0.6 : scale;
    scaleSpring.set(scaleValue);
  } */
</script>

<div 
  bind:this={slide}
  id="slide-{index}"
  class="slide">
  <div class="wrapper" style="transform: scale({$scaleSpring});">
    <div class="img">{index + 1}</div>
  </div>
</div>

<style lang="scss">
  .slide {
    display: flex;
    min-height: 100%;
    width: 100%;
    flex-shrink: 0;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
  }
  .img {
    width: 720px;
    aspect-ratio: 16 / 9;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.002) 0px 0.7px 0.7px, rgba(0, 0, 0, 0.005) 0px 1.9px 1.9px, rgba(0, 0, 0, 0.012) 0px 3.6px 3.6px, rgba(0, 0, 0, 0.02) 0px 6.3px 6.3px, rgba(0, 0, 0, 0.035) 0px 11px 11px, rgba(0, 0, 0, 0.1) 0px 20.2px 20.2px, rgba(0, 0, 0, 0.125) 0px 40px 40px;
  }
</style>