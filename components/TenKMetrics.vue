<template>
  <div class="tenk-widget metrics">
    <div class="tenk-widget-header tenk-header">Metrics</div>
    <div class="tenk-widget-content">
      <TenkMetricsItem title="Monthly Recurring Revenue" :metric="`$${mrr}`" />
      <TenkMetricsItem title="Annual Recurring Revenue" :metric="`$${arr}`" />
      <TenkMetricsItem title="Days of Savings Left" :metric="runwayLeft" />
      <TenkMetricsItem title="Default alive/dead" :metric="defaultAliveOrDead" />
    </div>
  </div>
</template>

<script>
import metrics from '@/mixins/metrics';

export default {
  name: 'Metrics',
  mixins: [metrics]
}
</script>

<style lang="scss" scoped>
/* .metrics {
  position: sticky;
  top: 40px;
  @media (max-width: 1192px) {
    position: relative;
    top: 0;
  }
} */
</style>
