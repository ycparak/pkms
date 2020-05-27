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
    let posts = []
    const collection = this.type.charAt(0).toUpperCase() + this.type.slice(1)
    console.log(collection)

    if (collection === 'All') {
      posts = await this.$content()
        .sortBy('date', 'desc')
        .fetch()
    } else {
      posts = await this.$content()
        .where({ collections: collection })
        .sortBy('date', 'desc')
        .fetch()
      console.log(posts)
    }

    this.posts = posts
  }
}
</script>

<style lang="scss" scoped>
</style>
