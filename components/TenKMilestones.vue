<template>
  <div class="milestones">
    <!-- <div class="milestones-header">Milestones</div> -->
    <div class="milestones-content">
      <TenKMilestonesItem title="Save 3 years runway" date="12 May 2021" :complete="true" />
      <TenKMilestonesItem title="Resign from job" date="12 May 2021" :complete="true" />
      <TenKMilestonesItem title="Start" date="01 Aug 2021" :complete="true" />
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
.milestones {
  border: 1px solid var(--line);
  border-radius: 8px;
  margin-bottom: var(--margin);
  color: var(--text);
  transition: all 0.1s ease-in-out;
  .milestones-header {
    padding: var(--margin);
    padding-bottom: 12px;
    font-size: 14px;
    font-weight: 200;
    line-height: 1;
  }
}
.milestones-content {
  padding: var(--margin) 0;
  position: relative;
  z-index: 3;
}
</style>
