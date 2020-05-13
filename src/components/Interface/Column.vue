<template>
  <div class="column">
    <div v-if="header" class="column-header">
      <span>{{ header }}</span>
    </div>
    <div class="section">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    header: {
      type: String,
      required: false,
      default: null
    },
  },
}
</script>

<style lang="scss" scoped>
.column {
  min-width: 520px;
  background: var(--background-color);
  box-shadow: var(--grid-column-shadow);
  scroll-snap-align: start;
  border: 1px solid var(--accent-color);
  border-radius: 12px;
  margin-right: 28px;
  @include daynight;

  .column-header {
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid var(--accent-color);
    padding: 6px 44px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>