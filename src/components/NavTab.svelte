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

  $: if (tabActiveOffset) {
    const distanceFromOffset = Math.abs(tabOffset - tabActiveOffset);
    const opacity = distanceFromOffset < 80 ? 1.0 - (distanceFromOffset / 80) * opacityFaded : opacityFaded;
    springOpacity.set(opacity < opacityFaded ? opacityFaded : opacity);
  }
</script>

<a
  id={href}
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
    transition: transform .3s ease-in;
    &:focus, &:focus-within, &:active {
      outline: none;
      box-shadow: none;
    }

    &:active {
      transform: scale(0.9);
      transition: transform .3s ease-out;
    }

    &::selection, &::-moz-selection {
      background: transparent;
    }
  }
</style>