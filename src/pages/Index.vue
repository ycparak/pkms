<template>
  <Layout v-slot:default="slotProps">
    <Container>
      <div class="grid">
        <div class="grid__column grid__column-1">
          <div class="site__hero">
            <h1 class="site__hero--title title">Hello, I’m Yusuf Parak.</h1>
            <p class="site__hero--paragraph body-text">I go by the handle <a href="https://twitter.com/ycparak" class="link">@ycparak</a> on the internets. In the real world, I live in Cape Town, where I'm a software developer/designer working on Thinkst Canary &mdash; one of the most loved security products around.</p>
            <NewsletterList :slot-props="slotProps" />
          </div>
        </div>
        <div class="grid__column grid__column-2">
          <PostList :slot-props="slotProps" />
        </div>
      </div>
    </Container>
  </Layout>
</template>

<script>
import NewsletterList from '~/components/NewsletterList'
import PostList from '~/components/PostList'

export default {
  name: 'Index',
  components: {
    NewsletterList,
    PostList,
  },
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
      grid-column-start: 2;
      grid-column-end: 2;
      width: 100%;
      padding-bottom: 144px;
    }
  }
}
</style>
