<script lang="ts">
  export let isDarkMode = false;
  export let title : string;
</script>

<div class="title" class:dark={isDarkMode}>
  <h1>{title.trim()}</h1>
</div>

<style lang="scss">
  .title {
    position: fixed;
    top: calc(var(--space-pos-fixed));
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 499;
    h1 {
      @include interface-type-xl;
      color: var(--color-text);
			line-height: 1.4;
			font-weight: 400;
      text-transform: lowercase;
    }
  }
</style>