<template>
  <Column>
    <section class="section hero">
      <h1 class="title">Yo, I’m Yusuf. Welcome.</h1>
      <p class="margin-top--20">
        I'm a software developer and designer working at Thinkst Applied Research. There, I mostly work on <a href="https://canary.tools" class="link">Canary</a> &mdash; one of the most loved security products around. I’m also the maker of x which does y and has z metric.
        <g-link to="/story" class="link link__special">
          <label>My story</label>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
          </svg>
        </g-link>
      </p>
      <p>
        I’m obsessed with improving myself, human behaivour, design and bootstrapped startups. If you’re interested in these topics too, I write a short weekly newsletter you’d probably love. It contains some writing by me and 3 curated links I think will go on to pass the <a href="https://en.wikipedia.org/wiki/Lindy_effect" class="link">Lindy test</a>. You can subscribe below.
        <g-link to="/story" class="link link__special">
          <label>Previous newsletter issues</label>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
          </svg>
        </g-link>
        </p>
      <NewsletterForm />
    </section>
  </Column>
</template>

<script>
import NewsletterForm from '~/components/NewsletterForm';

export default {
  name: 'Profile',
  components: {
    NewsletterForm,
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 24px 36px;
}
</style>