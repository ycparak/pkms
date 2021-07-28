<template>
  <div class="tenkmrr">
    <h1>The $10k MRR Challenge.</h1>

    <div class="targets">
      <TenKMilestones />
    </div>

    <div class="main">
      <Challenge />
    </div>

    <div class="numbers">
      <TenKMetrics />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style lang="scss" scoped>
.tenkmrr {
  display: grid;
  grid-template-columns: 1fr 256px calc(var(--column)) 256px 1fr;
  grid-template-rows: 1fr auto;
  column-gap: var(--margin);
  row-gap: var(--margin);
  margin-top: calc(var(--margin) * 2);
}
h1 {
  grid-row: 1;
  grid-column: 3;
  padding: 0;
  margin: 0;
}
.targets {
  grid-row: 2;
  grid-column: 2;
}
.numbers {
  grid-row: 2;
  grid-column: 4;
}
.main {
  grid-row: 2;
  grid-column: 3;
}
</style>
