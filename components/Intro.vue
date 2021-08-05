<template>
  <div id="about" class="intro">
    <Grid>
      <h1>Hello.</h1>
      <p>
        I’m Yusuf. I’m a <code>{{ myAge }}</code> y/o South African designer,
        software developer and as of recently a founder. I recently left my job
        to build cool software on the internet with the goal of
        <nuxt-link to="/10kmrr">getting to $10k MRR</nuxt-link>. I’m currently
        at <code>$0k</code> with <code>{{ runwayLeft }}</code> days of savings
        left. Previously I worked at
        <a href="https://canary.tools">Thinkst Canary</a>, studied CS, and
        dropped out of an architecture degree.
      </p>
    </Grid>
  </div>
</template>

<script>
import metrics from '@/mixins/metrics'

export default {
  name: 'Intro',
  mixins: [metrics],
}
</script>

<style lang="scss" scoped>
.intro {
  margin-top: calc(var(--margin) * 2);
}
p {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
