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
  head() {
    return {
      title: 'The Challenge: $10k MRR in 2.5 Years | Yusuf Parak (@ycparak)',
      meta: [
        { hid: 'description', name: 'description', content: "I’ve saved up 2.5 years of runway with the goal of bootstrapping a project to $10,000 in monthly recurring revenue in 2.5 years / 912 days. View my weekly progress here." },
        { hid: 'og:title', name: 'og:title', content: "The Challenge: $10k MRR in 2.5 Years" },
        { hid: 'og:description', property: 'og:description', content: "I’ve saved up 2.5 years of runway with the goal of bootstrapping a project to $10,000 in monthly recurring revenue in 2.5 years / 912 days. View my weekly progress here." },
        { hid: 'og:image', name: 'og:image', content: "https://ycparak.com/10k-mrr-pic.png" },
        { hid: 'og:url', name: 'og:url', content: "https://ycparak.com/10kmrr" },
        { hid: 'og:site_name', name: 'og:site_name', content: "Yusuf Parak (@ycparak)" },
        { hid: 'og:type', name: 'og:type', content: "website" },
        { hid: 'twitter:title', name: 'twitter:title', content: 'The Challenge: $10k MRR in 2.5 Years' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'I’ve saved up 2.5 years of runway with the goal of bootstrapping a project to $10,000 in monthly recurring revenue in 2.5 years / 912 days. View my weekly progress here.' }
      ]
    }
  }
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
    grid-template-columns: minmax(12px, var(--margin)) 256px var(--margin) calc(var(--column) + (var(--margin) * 2)) 1fr;
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
    grid-column: 4;
  }
}

@media (max-width: 912px) {
  .tenkmrr {
    grid-template-columns: 1fr minmax(auto, calc(var(--column))) 1fr;
    gap: 20px;
  }
  .targets {
    display: none;
  }
  .main {
    grid-column: 2;
  }
}
</style>
