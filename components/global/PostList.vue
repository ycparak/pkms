<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.id">
      <inter-link :included-post="post" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PostList',
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    let posts = []
    posts = await this.$content()
      .where({ depth: 2 })
      .sortBy('createdAt', 'desc')
      .fetch()

    this.posts = posts
  }
}
</script>

<style lang="scss" scoped>
</style>
