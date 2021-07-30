<template>
  <div class="tenkmrr">
    <div class="targets">
      <div class="small-screen-show">
        <TenKMetrics />
      </div>
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
  grid-template-columns: 1fr 256px var(--margin) var(--margin) var(--column) var(--margin) var(--margin) 256px 1fr;
  row-gap: var(--margin);
  margin-top: calc(var(--margin) * 2);
}
.small-screen-show {
  display: none;
}
.targets {
  grid-row: 1;
  grid-column: 2;
  margin-top: 6px;
}
.numbers {
  grid-row: 1;
  grid-column: 8;
  margin-top: 6px;
}
.main {
  grid-row: 1;
  grid-column: 4 / 7;
}

@media (max-width: 1192px) {
  .tenkmrr {
    grid-template-columns: minmax(12px, var(--margin)) 256px calc(var(--column) + (var(--margin) * 2)) 1fr;
  }
  .targets {
    grid-column: 2;
  }
  .numbers {
    display: none;
  }
  .small-screen-show {
    display: block;
  }
  .main {
    grid-column: 3;
  }
}

@media (max-width: 912px) {
  .tenkmrr {
    grid-template-columns: 1fr minmax(auto, calc(var(--column))) 1fr;
  }
  .targets {
    display: none;
  }
  .main {
    grid-column: 2;
  }
}
</style>
