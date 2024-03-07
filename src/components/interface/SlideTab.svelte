<script lang="ts">
  import { runAnimation } from '$lib/stores';
  import { spring } from 'svelte/motion';
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let title: string;

  const springScale = spring(1, {
    stiffness: 0.1,
    damping: 0.225,
  });
  
  const scaleDown = () => springScale.set(0.92);
  const scaleUp = () => springScale.set(1);
</script>

{#if $runAnimation}
  <button
    tabindex="-1"
    style="transform: scale({$springScale});"
    on:click|preventDefault={() => dispatch('select')}
    on:mousedown={scaleDown}
    on:mouseup={scaleUp}
    on:mouseleave={scaleUp}
    on:touchstart={scaleDown}
    on:touchend={scaleUp}
    on:touchcancel={scaleUp}
    draggable="false">
    {title}
  </button>
{/if}

<style lang="scss">
  button {
    all: unset;
    @include interface-type-xl;
    width: fit-content;
    padding: toRem(8px) toRem(22px);
    border: none;
    text-decoration: none;
    user-select: none;
    backface-visibility: hidden;
    box-shadow: none;
    color: var(--color-text);
    border-radius: 6px;
    user-select: none;
    -webkit-user-drag: none;
    text-transform: lowercase;
    cursor: pointer;

    &:focus, &:focus-within, &:active {
      outline: none;
      box-shadow: none;
    }

    &::selection, &::-moz-selection {
      background: transparent;
    }
  }
</style>