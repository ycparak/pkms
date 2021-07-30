<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Grid',
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr var(--margin) var(--column) var(--margin) 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr minmax(auto, var(--column)) 1fr;
    column-gap: 20px;
  }
}
</style>
