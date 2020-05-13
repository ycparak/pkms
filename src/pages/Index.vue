<template>
  <Layout v-slot:default="slotProps">
    <div class="site__content">
      <div class="grid">
        <div class="column">
          <section class="section hero">
            <h1 class="site__hero--title title">Yo, I’m Yusuf. Welcome.</h1>
            <p class="site__hero--paragraph margin-top--20">
              I'm a software developer and designer working at Thinkst Applied Research. There, I mostly work on <a href="https://canary.tools" class="link">Canary</a> &mdash; one of the most loved security products around. I’m also the maker of x which does y and has z metric.
              <g-link to="/story" class="link link__special tweetstorm">
                <label class="link__special--label">My story</label>
                <svg class="link__special--svg tweetstorm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                </svg>
              </g-link>
            </p>
            <p class="site__hero--paragraph">
              I’m obsessed with improving myself, human behaivour, design and bootstrapped startups. If you’re interested in these topics too, I write a short weekly newsletter you’d probably love. It contains some writing by me and 3 curated links I think will go on to pass the <a href="https://en.wikipedia.org/wiki/Lindy_effect" class="link">Lindy test</a>. You can subscribe below.
              <g-link to="/story" class="link link__special newsletter">
                <label class="link__special--label">Previous newsletter issues</label>
                <svg class="link__special--svg newsletter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                </svg>
              </g-link>
              </p>
            <NewsletterForm />
          </section>
        </div>
        <div class="column">
          <PostList :slot-props="slotProps" type="all" />
        </div>
        <div class="column">
          <PostList :slot-props="slotProps" type="tweetstorms" />
        </div>
        <div class="column">
          <PostList :slot-props="slotProps" type="notes" />
        </div>
        <div class="column">
          <PostList :slot-props="slotProps" type="quotes" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import NewsletterList from '~/components/NewsletterList'
import NewsletterForm from '~/components/NewsletterForm'
import PostList from '~/components/PostList'

export default {
  name: 'Index',
  components: {
    NewsletterList,
    NewsletterForm,
    PostList,
  },
}
</script>

<style lang="scss" scoped>
.grid {
  padding: 28px;
  @media (min-width: 768px) {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    position: relative;
    margin: 0;
    padding-left: 136px;
    padding-right: 0;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding: 136px;

    .column {
      min-height: 100%;
      min-width: 520px;
      margin-right: 28px;
      background: var(--background-color);
      box-shadow: var(--grid-column-shadow);
      border-radius: 12px;
      scroll-snap-align: start;
    }

  }
  .hero {
    padding: 24px 36px;
  }
}
</style>