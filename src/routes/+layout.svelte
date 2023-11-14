<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";
  import "@phosphor-icons/web/fill";
  import { Nav, Guidelines } from '$components';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
	import type { LayoutData } from './$types';

  type Size = number;

  let screenWidth = writable<Size>(0);
  let screenHeight = writable<Size>(0);
  let index = writable<Size>(0);
  setContext('screenWidth', screenWidth);
  setContext('screenHeight', screenHeight);
  setContext('index', index);

  export let data: LayoutData;
</script>

<!-- <Guidelines /> -->
<Nav
  links={data.posts}
  tabActive={$index}
  on:setActiveIndex={(e) => index.set(e.detail)} />
<main>
  <slot></slot>
</main>

<svelte:window bind:innerWidth={$screenWidth} bind:innerHeight={$screenHeight} />

<style lang="scss">
  main {
    // display: flex;
    // flex-direction: column;
    // min-height: 100%;
    // width: 100%;
  }
</style>