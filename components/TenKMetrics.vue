<template>
  <div class="metrics">
    <!-- <div class="metrics-header">Metrics</div> -->
    <div class="metrics-content">
      <TenkMetricsItem title="Monthly Recurring Revenue" metric="$0" />
      <TenkMetricsItem title="Annual Recurring Revenue" metric="$0" />
      <TenkMetricsItem title="Days Since Starting" metric="0" />
      <TenkMetricsItem title="Days of Savings Left" metric="920" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Metrics',
}
</script>

<style lang="scss" scoped>
.metrics {
  border: 1px solid var(--line);
  border-radius: 8px;
  margin-bottom: var(--margin);
  color: var(--text);
  transition: all 0.1s ease-in-out;
  .metrics-header {
    padding: var(--margin);
    padding-bottom: 12px;
    font-size: 14px;
    font-weight: 200;
    line-height: 1;
  }
}
.metrics-content {
  // padding: var(--margin) 0;
  position: relative;
  z-index: 3;
}
</style>
