<template>
  <Fragment>
    <PostListItem
      v-for="post in posts"
      :key="post.id"
      :included-post="post">
      {{ post.title }}
    </PostListItem>
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
      .sortBy('updatedAt', 'desc')
      .fetch()
    this.posts = posts
  }
}
</script>

<style lang="scss" scoped>
</style>
