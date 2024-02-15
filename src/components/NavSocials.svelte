<script lang="ts">
  import { tweened } from 'svelte/motion';
	import { backOut } from 'svelte/easing';

  let showOverlay = false;

  const opacity = tweened(0.5, {
    duration: 400,
    delay: 0,
    easing: backOut
  });

  $: if (showOverlay) {
    $opacity = 1;
  } else {
    $opacity = 0;
  }
</script>

<div class="socials" class:active={showOverlay}>
  {#if showOverlay}
    <div
      style="opacity: {$opacity}"
      tabindex="-1"
      role="button"
      class="overlay"
      on:keydown={() => showOverlay = false}
      on:click={() => showOverlay = false}></div>
  {/if}

  <button
    class="btn-icon"
    class:active={showOverlay}
    on:click={() => showOverlay = !showOverlay}>
    <i class="ph ph-at"></i>
  </button>
</div>

<style lang="scss">
  .socials {
    position: fixed;
    bottom: var(--space-container);
    right: var(--space-container);
    z-index: 499;
    display: flex;
    align-items: center;
    margin-bottom: functions.toRem(-7px);
    margin-right: functions.toRem(-4px);
    gap: functions.toRem(8px);
    .overlay {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-color: var(--color-background-translucent);
      backdrop-filter: blur(6px);
      overflow: hidden;
      background-image: radial-gradient(circle at top left, transparent 0%, var(--color-background-translucent) 100%);
    }
    button {
      z-index: 1;
      transition: all .3s ease;

      &.active {
        color: var(--color-text);
      }
    }
  }
</style>