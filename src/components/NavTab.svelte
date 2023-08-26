<script lang="ts">
  import { spring } from 'svelte/motion';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let active: boolean;
  export let href: string;
  export let title: string;
  export let tabOffset: number;
  export let tabActiveOffset: number;
  let opacityFaded = 0.2;

  const springOpacity = spring(opacityFaded, {
    stiffness: 0.09,
    damping: 0.87,
  });
  const springScale = spring(1, {
    stiffness: 0.1,
    damping: 0.2,
  });

  $: if (tabActiveOffset) {
    const distanceFromOffset = Math.abs(tabOffset - tabActiveOffset);
    const opacity = distanceFromOffset < 80 ? 1.0 - (distanceFromOffset / 80) * opacityFaded : opacityFaded;
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
  on:touchstart={scaleDown}
  on:touchend={scaleUp}
  on:touchcancel={scaleUp}
  tabindex="-1"
  draggable="false">
  {title}
</a>

<style lang="scss">
  a {
    width: fit-content;
    padding: 8px 20px;
    margin: 0;
    font-size: clamp(1.00rem, calc(0.96rem + 0.22vw), 1.125rem);
    line-height: 1;
    cursor: default;
    color: #000;
    text-decoration: none;
    text-transform: lowercase;
    font-weight: 300;
    // white-space: nowrap;
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