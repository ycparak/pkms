<script lang="ts">
	import { onMount } from 'svelte';
  export let isDarkMode = false;

  let parentPath = '/';

  onMount(() => {
    const path = window.location.pathname;
    const arrPath = path.split('/').slice(0, -1);
    if (arrPath[arrPath.length - 1] === 'craft') {
      parentPath = '/';
    } else {
      parentPath = arrPath.join('/');
    }
  });
</script>

<div class="meta" class:dark={isDarkMode}>
  <a href={parentPath} class="btn btn-icon">
    <i class="icon ph ph-arrow-elbow-up-left"></i>
  </a>
</div>

<style lang="scss">
  .meta {
    position: fixed;
    top: calc(var(--space-container) - 6px);
    left: calc(var(--space-container) - 6px);
    z-index: 499;
  }

  a {
    font-size: functions.toRem(15px);
  }
</style>