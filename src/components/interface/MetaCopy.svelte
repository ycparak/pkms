<script lang="ts">
  import { fly } from 'svelte/transition';
  export let isDarkMode = false;

  let copied = false;
  let copyTimeout: ReturnType<typeof setTimeout>;

  function copyURL() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    copied = true;
		clearTimeout(copyTimeout);
		copyTimeout = setTimeout(() => {
			copied = false;
		}, 2500);
  }
</script>

<div class="meta" class:dark={isDarkMode}>
  <button on:click={copyURL} class="btn btn-icon">
    {#if copied}
      <i in:fly={{ y: -8 }} class="icon ph ph-check primary"></i>
    {:else}
      <i in:fly={{ y: 8 }} class="icon ph ph-link"></i>
    {/if}
  </button>
</div>

<style lang="scss">
  .meta {
    position: fixed;
    top: calc(var(--space-container) - 6px);
    right: calc(var(--space-container) - 6px);
    z-index: 499;
  }

  button {
    font-size: functions.toRem(15px);
    .primary {
      color: var(--color-primary);
    }
  }
</style>