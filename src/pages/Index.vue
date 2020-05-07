<template>
  <Layout v-slot:default="slotProps">
    <Container>
      <div class="grid">
        <div class="grid__column grid__column-1">
          <div class="site__hero">
            <h1 class="site__hero--title title">Hello, I’m Yusuf Parak.</h1>
            <p class="site__hero--paragraph body-text">
              I'm a software developer/designer working at Thinkst Applied Research. There, I mostly work on <a href="https://canary.tools" class="link">Canary</a> &mdash; one of the most loved security products around. I'm also the maker of x which does y and has z metric.
              <g-link to="/story" class="link link__special tweetstorm">
                <label class="link__special--label">My story</label>
                <svg class="link__special--svg tweetstorm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                </svg>
              </g-link>
            </p>
            <p class="site__hero--paragraph body-text">
              I'm obsessed with improving myself, human behaivour, design and bootstrapped startups. If you're interested in these topics too, I write a short weekly newsletter you'd probably love. It contains some writing by me and 3 curated links I think will go on to pass the <a href="https://en.wikipedia.org/wiki/Lindy_effect" class="link">Lindy test</a>. You can subscribe below.
              <g-link to="/story" class="link link__special newsletter">
                <label class="link__special--label">Previous newsletter issues</label>
                <svg class="link__special--svg newsletter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                </svg>
              </g-link>
              </p>
            <NewsletterForm />
            <!-- <NewsletterList :slot-props="slotProps" /> -->
          </div>
        </div>
        <div class="grid__column grid__column-2">
          <PostList :slot-props="slotProps" />
        </div>
      </div>
    </Container>

    <FeedCategories :collection="slotProps.collection" :collection-next="slotProps.collectionNext" />
  </Layout>
</template>

<script>
import NewsletterList from '~/components/NewsletterList'
import NewsletterForm from '~/components/NewsletterForm'
import PostList from '~/components/PostList'
import FeedCategories from '~/components/FeedCategories'

export default {
  name: 'Index',
  components: {
    NewsletterList,
    NewsletterForm,
    PostList,
    FeedCategories
  },
}
</script>

<style lang="scss" scoped>
.grid {
  padding: 144px 0;
  @media (min-width: 1060px) {
    display: grid;
    grid-template-columns: 414px 1fr;
    gap: 0 48px;
  }
  @media (min-width: 1428px) {
    gap: 0 140px;
  }
  .grid__column-1 {
    @media (min-width: 1060px) {
      position: fixed;
      max-width: 414px;
      height: calc(100vh - 164px);
      margin-bottom: 0;
    }
  }
  .grid__column-2 {
    @media (min-width: 1060px) {
      grid-column-start: 2;
      grid-column-end: 2;
      width: 100%;
      padding-bottom: 0;
    }
  }
}
</style>
