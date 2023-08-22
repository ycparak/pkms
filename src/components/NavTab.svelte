<script lang="ts">
  import { spring } from 'svelte/motion';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let active: boolean;
  export let href: string;
  export let title: string;
  export let tabOffset: number;
  export let tabActiveOffset: number;
  let opacityFaded = 0.25;

  const springOpacity = spring(opacityFaded, {
    stiffness: 0.02,
    damping: 0.19,
  });
  const springScale = spring(1, {
    stiffness: 0.05,
    damping: 0.2,
  });

  $: if (tabActiveOffset) {
    const distanceFromOffset = Math.abs(tabOffset - tabActiveOffset);
    const opacity = distanceFromOffset < 100 ? 1.0 - (distanceFromOffset / 100) * opacityFaded : opacityFaded;
    springOpacity.set(opacity < opacityFaded ? opacityFaded : opacity);
  }

  const scaleDown = () => springScale.set(0.92);
  const scaleUp = () => springScale.set(1);
</script>

<a
  id={href}
  style="opacity: {$springOpacity}; transform: scale({$springScale});"
  class:active={active}
  href="#{href}"
  on:click|preventDefault={() => dispatch('setActive')}
  on:mousedown={scaleDown}
  on:mouseup={scaleUp}
  on:mouseleave={scaleUp}
  tabindex="-1"
  draggable="false">
  {title}
</a>

<style lang="scss">
  a {
    box-sizing: border-box;
    width: fit-content;
    padding: 0 20px;
    margin: 0;
    line-height: 22px;
    font-size: clamp(1.00rem, calc(0.96rem + 0.22vw), 1.125rem);
    cursor: default;
    color: #000;
    text-decoration: none;
    text-transform: lowercase;
    font-weight: 300;
    white-space: nowrap;
    user-select: none;
    &:focus, &:focus-within, &:active {
      outline: none;
      box-shadow: none;
    }

    &::selection, &::-moz-selection {
      background: transparent;
    }
  }
</style>