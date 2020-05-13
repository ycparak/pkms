<template>
  <section class="scroll__section">
    <PostListItem
      v-for="(edge, index) in posts"
      :key="edge.node.id"
      :post="edge.node"
      />
  </section>
</template>

<script>
import PostListItem from '~/components/PostListItem';

export default {
  name: 'PostList',
  props: ['slotProps', 'type'],
  components: {
    PostListItem
  },
  computed: {
    posts() {
      const collection = this.type;
      const posts = this.$static.allPost.edges;

      if (collection === 'all') return posts;
      return posts.filter(post => post.node.collections.toLowerCase() === collection);
    }
  },
}
</script>

<static-query>
  {
    allPost {
      edges {
        node {
          id
          path
          title
          quote
          date (format:"MMM YYYY")
          collection
          collections
          excerpt
          timeToRead
        }
      }
    }
  }
</static-query>

<style lang="scss" scoped>
</style>