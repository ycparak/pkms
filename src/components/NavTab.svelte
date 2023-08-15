<script lang="ts">
  import { spring } from 'svelte/motion';
  import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

  export let index: number;
  export let active: boolean;
  export let opacity: number;
  export let href: string;
  export let title: string;

  const springOpacity = spring(0.35, {
    stiffness: 0.045,
    damping: 0.4,
  });

  onMount(() => {
    springOpacity.set(0.35);
  });

  $: springOpacity.set(opacity);
</script>

<a
  id="{index.toString()}"
  style="opacity: {$springOpacity};"
  class:active={active}
  href="#{href}"
  on:click|preventDefault={() => dispatch('setActive')}
  tabindex="-1"
  draggable="false">
  {title}
</a>

<style lang="scss">
  a {
    box-sizing: border-box;
    width: fit-content;
    padding: 20px 30px;
    margin: 0;
    font-size: 18px;
    cursor: default;
    color: #212329;
    text-decoration: none;
    text-transform: lowercase;
    font-weight: 400;
    white-space: nowrap;
    &:focus, &:focus-within {
      outline: none;
      box-shadow: none;
    }
  }
</style>