<template>
  <Fragment>
    <post-list-item
      v-for="post in posts"
      :key="post.id"
      :included-post="post">
      {{ post.title }}
    </post-list-item>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'PostList',
  components: {
    Fragment
  },
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
