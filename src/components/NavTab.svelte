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
  let slug = href.split('/')[1];

  const springOpacity = spring(active ? 1 : opacityFaded, {
    stiffness: 0.09,
    damping: 0.87,
  });
  const springScale = spring(1, {
    stiffness: 0.1,
    damping: 0.2,
  });

  $: if (tabActiveOffset) {
    const distanceFromOffset = Math.abs(tabOffset - tabActiveOffset);
    const opacity = distanceFromOffset < 88 ? 1.0 - (distanceFromOffset / 88) * opacityFaded : opacityFaded;
    springOpacity.set(opacity < opacityFaded ? opacityFaded : opacity);
  }
  
  const scaleDown = () => springScale.set(0.94);
  const scaleUp = () => springScale.set(1);
</script>

<button
  id={slug}
  style="opacity: {$springOpacity}; transform: scale({$springScale});"
  class:active={active}
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
</button>

<style lang="scss">
  button {
    // reset all button styles
    all: unset;
    width: fit-content;
    padding: functions.toRem(4px) functions.toRem(24px);
    border: none;
    font-size: functions.toRem(18px);
    line-height: 1;
    cursor: default;
    letter-spacing: -0.01em;
    text-decoration: none;
    user-select: none;
    text-transform: lowercase;
    backface-visibility: hidden;
    box-shadow: none;
    color: var(--color-text);
    border-radius: 6px;

    &:focus, &:focus-within, &:active {
      outline: none;
      box-shadow: none;
    }

    &::selection, &::-moz-selection {
      background: transparent;
    }
  }
</style>