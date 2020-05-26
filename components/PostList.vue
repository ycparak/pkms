<template>
  <Fragment>
    <PostListItem
      v-for="post in posts"
      :key="post.id"
      :post="post" />
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'PostList',
  components: {
    Fragment
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    const collection = this.type
    const posts = await this.$content().fetch()

    if (collection === 'all') {
      this.posts = posts
    } else {
      this.posts = posts.filter(post => post.collections.toLowerCase() === collection)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
