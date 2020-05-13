<template>
  <div class="column">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Column',
}
</script>

<style lang="scss" scoped>
.column {
  min-height: 100%;
  min-width: 520px;
  margin-right: 28px;
  background: var(--background-color);
  box-shadow: var(--grid-column-shadow);
  border-radius: 12px;
  scroll-snap-align: start;
}
</style>