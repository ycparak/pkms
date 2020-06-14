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

    // Filter varriables
    const collection = this.type.charAt(0).toUpperCase() + this.type.slice(1)
    const fieldsRequired = ['title', 'date', 'path', 'excerpt', 'readingTime', 'quote', 'createdAt']

    if (collection === 'All') {
      posts = await this.$content()
        .only(fieldsRequired)
        .sortBy('createdAt', 'desc')
        .fetch()
    } else {
      posts = await this.$content()
        .only(fieldsRequired)
        .where({ collections: collection })
        .sortBy('createdAt', 'desc')
        .fetch()
    }

    this.posts = posts
  }
}
</script>

<style lang="scss" scoped>
</style>
