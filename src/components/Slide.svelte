<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';

  type Context = Writable<number>

  export let index = 0;
  // export let xPosition = 0;
  let screenWidth = getContext<Context>('screenWidth')
  let slide : HTMLElement;
</script>

<div 
  bind:this={slide}
  id="slide-{index}"
  class="slide">
  <div class="wrapper">
    <div class="img">
      <!-- {index + 1} -->
    </div>
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
  /* .img {
    width: 720px;
    aspect-ratio: 16 / 9;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 12px;
    filter: drop-shadow(0px 11px 22px rgba(0,0,0,0.3));
  } */
</style>