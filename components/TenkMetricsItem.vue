<template>
  <div class="metric">
    <div class="metric-header">{{ metric }}</div>
    <div class="metric-var">{{ title }}</div>
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
  padding-top: calc(var(--margin) - 8px);
  border-bottom: 1px solid var(--line);
  transition: all .1s ease-in-out;
  &:last-child { border-bottom: none; }
  .metric-header {
    font-size: 20px;
    font-family: 'Space Mono', monospace;
    transition: all .1s ease-in-out;
    color: var(--text);
  }
  .metric-var {
    font-size: 11px;
    transition: all .1s ease-in-out;
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    color: var(--subtle-text);
    margin-top: 4px;
  }
}
</style>
