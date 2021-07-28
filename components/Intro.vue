<template>
  <div id="about" class="intro">
    <Grid>
      <h1>Hello.</h1>
      <p>
        I’m Yusuf. I’m a <code>{{ myAge }}</code> y/o South African designer, software developer and as of recently a founder. <code>{{ timeSinceResignation }}</code> days ago I quit my job to build cool shit on the internet with the goal of <nuxt-link to="/10kmrr">getting to $10k MRR</nuxt-link>. I’m currently at <code>$0k</code> with <code>{{ runwayLeft }}</code> days of savings left. Previously I worked at <a href="https://canary.tools">Thinkst Canary</a>, studied CS, and dropped out of an architecture degree.
      </p>
      <!-- <p>
        You’ve stumbled upon my weird slice of the internet. This site is part blog, part PKMS, part journal and part exploration space. It’s very much in 'beta' — most of it is hidden behind <nuxt-link to="/auth-for-me">just-for-me authentication</nuxt-link> but I’m slowly opening it up.
      </p> -->
    </Grid>
  </div>
</template>

<script>
import metrics from '@/mixins/metrics';

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
  margin-top: 8px;
  margin-bottom: 0;
}
</style>
