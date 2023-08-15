<script lang="ts">
  import { writable } from 'svelte/store';
	import { setContext } from "svelte";
  // import type Writable from 'svelte/store';
  // import { getContext } from 'svelte';

  type Size = number;

  let screenWidth = writable<Size>(0);
  let screenHeight = writable<Size>(0);
  setContext('screenWidth', screenWidth);
  setContext('screenHeight', screenHeight);

  // type Context = Writable<number>
  // let screenWidth = getContext<Context>('screenWidth')
</script>

<svelte:window bind:innerWidth={$screenWidth} bind:innerHeight={$screenHeight} />

<style lang="scss">
</style>