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
    top: calc(var(--space-pos-fixed));
    left: calc(var(--space-pos-fixed));

    a {
      font-size: toRem(15px);
    }

    &:not(.dark) {
      a {
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(5px);
      }
    }
  }
</style>