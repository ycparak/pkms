<template>
  <Post :post="post">
    <nuxt-content :document="post" />
  </Post>
</template>

<script>
export default {
  name: 'Slug',
  async asyncData({ $content, params }) {
    const post = await $content('', params.slug).fetch()
    return { post }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        { hid: 'og:description', property: 'og:description', content: this.post.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
