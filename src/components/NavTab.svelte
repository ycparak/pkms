<script lang="ts">
  import { spring } from 'svelte/motion';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let active: boolean;
  export let href: string;
  export let title: string;
  export let tabOffset: number;
  export let tabActiveOffset: number;

  const springOpacity = spring(0.3, {
    stiffness: 0.035,
    damping: 0.4,
  });
  const springScale = spring(1, {
    stiffness: 0.045,
    damping: 0.4,
  });

  $: if (tabActiveOffset) {
    const distanceFromOffset = Math.abs(tabOffset - tabActiveOffset);
    const opacity = distanceFromOffset < 100 ? 1.0 - (distanceFromOffset / 100) * 0.3 : 0.3;
    springOpacity.set(opacity < 0.3 ? 0.3 : opacity);
  }

  const scaleDown = () => springScale.set(0.9);
  const scaleUp = () => springScale.set(1);
</script>

<a
  id={href}
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
    line-height: 1;
    font-size: 18px;
    cursor: default;
    color: #000;
    text-decoration: none;
    text-transform: lowercase;
    font-weight: 300;
    white-space: nowrap;
    &:focus, &:focus-within {
      outline: none;
      box-shadow: none;
    }
  }
</style>