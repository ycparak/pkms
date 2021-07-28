<template>
  <div class="tenkmrr">
    <div class="targets">
      <TenKMilestones />
    </div>

    <div class="main">
      <TenKChallenge />
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
  grid-template-columns: 1fr 256px calc(var(--column) + (var(--margin) * 2)) 256px 1fr;
  grid-template-rows: 1fr auto;
  column-gap: var(--margin);
  row-gap: var(--margin);
  margin-top: var(--margin);
}
.targets {
  grid-row: 1;
  grid-column: 2;
  margin-top: calc(var(--margin) + 12px);
}
.numbers {
  grid-row: 1;
  grid-column: 4;
  margin-top: calc(var(--margin) + 12px)
}
.main {
  grid-row: 1;
  grid-column: 3;
}
</style>
