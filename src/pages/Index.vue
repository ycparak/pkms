<template>
  <Layout v-slot:default="slotProps">
    <Container>
      <div class="grid">
        <div class="grid__column grid__column-1">
          <div class="site__hero">
            <h1 class="site__hero--title title">Hello, I’m Yusuf Parak.</h1>
            <p class="site__hero--paragraph body-text">I go by the handle <a href="https://twitter.com/ycparak" class="username-link">@ycparak</a> on the internets. In the real world, I live in beautiful Cape Town, where I'm a software developer/designer at Thinkst Applied Research. There, I mostly work on Canary, one of the most loved security products around.</p>
            <p class="site__hero--paragraph body-text">This site is built using my side-project <a href="https://twitter.com/ycparak">MumblingIO</a> &mdash; which allows you to use Twitter as a CMS for your blog. If you love Twitter and value simplicity, you should check it out.</p>
          </div>
        </div>
        <div class="grid__column grid__column-2">
          <Posts :collection="slotProps.collection" />
        </div>
      </div>
    </Container>
  </Layout>
</template>

<script>
import Posts from '~/components/Posts'

export default {
  name: 'Index',
  components: {
    Posts,
  },
  methods: {
    setCollection() {
      console.log(slotProps);
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  padding-top: 144px;
  @media (min-width: 1060px) {
    display: grid;
    grid-template-columns: 414px 1fr;
    gap: 0 48px;
  }
  @media (min-width: 1428px) {
    gap: 0 140px;
  }
  // All columns
  .grid__column {
    margin-bottom: 72px;
  }
  // First column/div
  .grid__column-1 {
    @media (min-width: 1060px) {
      position: fixed;
      max-width: 414px;
      height: calc(100vh - 164px);
      margin-bottom: 0;
    }
  }
  // Secnd column/div
  .grid__column-2 {
    @media (min-width: 1060px) {
      height: 200vh;
      grid-column-start: 2;
      grid-column-end: 2;
      width: 100%;
    }
  }
}
</style>
