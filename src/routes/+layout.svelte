<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";

  // Calculate fly transition x value and duration
  let screenWidth = 0;
</script>

<slot></slot>

<!-- Get window size -->
<svelte:window bind:innerWidth={screenWidth} />

<style lang="scss">
</style>