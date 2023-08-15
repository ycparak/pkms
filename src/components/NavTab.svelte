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
  const springScale = spring(1, {
    stiffness: 0.045,
    damping: 0.4,
  });

  onMount(() => {
    springOpacity.set(0.35);
  });

  $: springOpacity.set(opacity);

  const scaleDown = () => springScale.set(0.9);
  const scaleUp = () => springScale.set(1);
</script>

<a
  id="{index.toString()}"
  style="opacity: {$springOpacity}; transform: scale({$springScale});)"
  class:active={active}
  href="#{href}"
  on:click|preventDefault={() => dispatch('setActive')}
  on:mousedown={scaleDown}
  on:mouseup={scaleUp}
  tabindex="-1"
  draggable="false">
  {title}
</a>

<style lang="scss">
  a {
    box-sizing: border-box;
    width: fit-content;
    padding: 10px 30px;
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