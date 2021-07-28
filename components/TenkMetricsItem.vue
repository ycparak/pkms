<template>
  <div class="metric">
    <div class="metric-header">{{ metric }}</div>
    <div class="tenk-var">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    title: {
      type: String,
      required: true
    },
    metric: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.metric {
  padding: var(--margin);
  border-bottom: 1px solid var(--line);
  transition: all .1s ease-in-out;
  &:last-child { border-bottom: none; }
  .metric-header {
    font-size: 20px;
    font-family: 'Space Mono', monospace;
    transition: all .1s ease-in-out;
    color: var(--text);
    line-height: 1;
  }
}
</style>
