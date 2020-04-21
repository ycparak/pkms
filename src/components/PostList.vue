<template>
  <div class="post__list">
    <PostListItem
      v-for="(edge, index) in posts"
      :key="edge.node.id"
      :post="edge.node"
      :last-index="posts.length + 100 - index"
      :collection="slotProps.collection"
      :set-collection="slotProps.setCollection"
      :set-next-collection="slotProps.setNextCollection"
      :revert-collection="slotProps.revertCollection"
      />
  </div>
</template>

<script>
import PostListItem from '~/components/PostListItem';

export default {
  name: 'PostList',
  props: ['slotProps'],
  components: {
    PostListItem
  },
  computed: {
    posts() {
      const { collection } = this.slotProps;
      const posts = this.$static.allPost.edges;

      if (collection === 'all') return posts;
      return posts.filter(post => post.node.collection.toLowerCase() === collection);
    }
  }
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
          date (format:"DD MM YYYY")
          collection
          tags
          timeToRead
        }
      }
    }
  }
</static-query>

<style lang="scss" scoped>
.post__list {
  margin: -4px auto;
  @media (min-width: 1360px) {
    margin: -4px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 80px;
  }
}
</style>