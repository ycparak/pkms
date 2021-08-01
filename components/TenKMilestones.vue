<template>
  <div class="tenk-widget">
    <div class="tenk-widget-header tenk-header">Milestones</div>
    <div class="tenk-widget-content milestones-content">
      <TenKMilestonesItem title="Save 2.5 years runway" date="25 May 2021" :complete="true" />
      <TenKMilestonesItem title="Leave job" date="16 Jul 2021" :complete="true" />
      <TenKMilestonesItem title="Start challenge" date="01 Aug 2021" :complete="true" />
      <TenKMilestonesItem title="First sale / bit of revenue" date="Don’t care how" :complete="false" />
      <TenKMilestonesItem title="$1k MRR" date="Ramen profitability" :complete="false" />
      <TenKMilestonesItem title="$4k MRR" date="Replicates old base salary" :complete="false" />
      <TenKMilestonesItem title="$5k MRR" date="Halfway" :complete="false" />
      <TenKMilestonesItem title="$7.5k MRR" date="Spoil parents" :complete="false" />
      <TenKMilestonesItem title="$10k MRR" date="Live happily ever after :)" :complete="false" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Milestones',
}
</script>

<style lang="scss" scoped>
.milestones-content {
  padding: var(--margin) 0;
}
</style>
