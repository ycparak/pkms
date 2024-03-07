<script lang="ts">
  export let isDarkMode = false;
  export let link: string | null | undefined;
  export let icon: string;
</script>

<div class="meta" class:dark={isDarkMode}>
  <a href="{link}" target="_blank" rel="noopener noreferrer" class="btn btn-icon">
    <i class="icon ph ph-{icon}"></i>
  </a>
</div>

<style lang="scss">
  .meta {
    position: fixed;
    right: calc(var(--space-pos-fixed));
    bottom: calc(var(--space-pos-fixed));
    z-index: 499;
  }

  a {
    font-size: toRem(16px);
  }
</style>