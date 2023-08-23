<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";
  import "@phosphor-icons/web/fill";
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  type Size = number;

  let screenWidth = writable<Size>(0);
  let screenHeight = writable<Size>(0);
  setContext('screenWidth', screenWidth);
  setContext('screenHeight', screenHeight);
</script>

<svg class="noise">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"></feTurbulence>
    <feColorMatrix type="saturate" values="0"></feColorMatrix>
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)"></rect>
</svg>

<button class="button-menu button-primary button-icon">
  <div class="inner"><i class="icon ph-fill ph-list"></i></div>
</button>

<main>
  <slot></slot>
</main>

<svelte:window bind:innerWidth={$screenWidth} bind:innerHeight={$screenHeight} />

<style lang="scss">
  .noise {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    filter: brightness(120%) contrast(120%);
  }

  .button-menu {
    position: fixed;
    top: 22px;
    left: 22px;
    z-index: 99;
  }

  main {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
</style>