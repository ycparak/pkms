<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { spring } from 'svelte/motion';
  const dispatch = createEventDispatcher()

  export let href: string;
  export let title: string;
  export let opacity: number;

  const springScale = spring(1, {
    stiffness: 0.1,
    damping: 0.225,
  });
  
  const scaleDown = () => springScale.set(0.92);
  const scaleUp = () => springScale.set(1);
</script>

<a
  href="{href}"
  style="opacity: {opacity}; transform: scale({$springScale});"
  on:click|preventDefault={() => dispatch('select')}
  on:mousedown={scaleDown}
  on:mouseup={scaleUp}
  on:mouseleave={scaleUp}
  on:touchstart={scaleDown}
  on:touchend={scaleUp}
  on:touchcancel={scaleUp}
  draggable="false">
  {title}
</a>

<style lang="scss">
  a {
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
    user-select: none;
    -webkit-user-drag: none;

    &:focus, &:focus-within, &:active {
      outline: none;
      box-shadow: none;
    }

    &::selection, &::-moz-selection {
      background: transparent;
    }
  }
</style>