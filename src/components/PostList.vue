<template>
  <Fragment>
    <PostListItem
      v-for="(edge, index) in posts"
      :key="edge.node.id"
      :post="edge.node"
      />
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import PostListItem from '~/components/PostListItem';

export default {
  name: 'PostList',
  props: ['slotProps', 'type'],
  components: {
    Fragment,
    PostListItem
  },
  computed: {
    posts() {
      const collection = this.type;
      const posts = this.$static.allPosts.edges;

      if (collection === 'all') return posts;
      return posts.filter(post => post.node.collections.toLowerCase() === collection);
    }
  },
}
</script>
<static-query>
  {
    allPosts {
      edges {
        node {
          id
          path
          title
          date (format:"MMM YYYY")
          collection
          collections
          excerpt
        }
      }
    }
  }
</static-query>

<style lang="scss" scoped>
</style>