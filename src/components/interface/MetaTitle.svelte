<script lang="ts">
  export let isDarkMode = false;
  export let title : string;
</script>

<div class="meta" class:dark={isDarkMode}>
  <h1>{title.trim()}</h1>
</div>

<style lang="scss">
  .meta {
    position: fixed;
    top: calc(var(--space-container) - 2px);
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 499;
    h1 {
      @include mixins.interface-type-xl;
      color: var(--color-text);
      font-weight: 400;
      text-transform: lowercase;
    }
  }
</style>