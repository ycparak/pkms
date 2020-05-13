<template>
  <Layout v-slot:default="slotProps">
    <div class="site__content">
      <div class="grid">
        <div class="column c1">
          <section class="scroll__section site__hero">
            <h1 class="site__hero--title title">Hello, I’m Yusuf Parak.</h1>
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
          <!-- <div class="column__header">
            <div class="column__header--container">
              <span class="column__header--text">About me</span>
            </div>
          </div> -->
        </div>
        <div class="column c2">
          <PostList :slot-props="slotProps" type="projects" />
        </div>
        <div class="column c3">
          <PostList :slot-props="slotProps" type="tweetstorms" />
        </div>
        <div class="column c4">
          <PostList :slot-props="slotProps" type="notes" />
        </div>
        <div class="column c5">
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
  display: flex;
  width: 100%;
  padding-left: 148px;

  .column {
    display: grid;
    // grid-template-columns: 1fr 32px;
    min-height: 100%;
    min-width: 520px;
    margin-right: 40px;
    position: sticky;
    top: 0;
    background: var(--background-color);
    box-shadow: var(--grid-column-shadow);
    border-radius: 12px;
    border: 1px solid var(--accent-color);

    .column__header {
      background: var(--accent-color);
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;

      .column__header--text {
        display: inline-block;
        transform: rotate(-90deg);
        width: 100%;
        height: 100%;
      }
    }
  }

  .c1 {
    z-index: 10;
    left: -386px;
  }
  .c2 {
    z-index: 9;
    left: -356px;
  }
  .c3 {
    z-index: 8;
    left: -302px;
  }
  .c4 {
    z-index: 7;
  }
  .c5 {
    z-index: 6;
  }

  .site__hero {
    padding: 28px 40px;
  }
}
</style>
