<template>
  <div class="post__list">
    <PostListItem
      v-for="(edge, index) in posts"
      :key="edge.node.id"
      :post="edge.node"
      :collection="slotProps.collection"
      :collection-next="slotProps.collectionNext"
      :hovered-post="slotProps.hoveredPost"
      :set-next-collection="slotProps.setNextCollection"
      :set-hovered-post="slotProps.setHoveredPost"
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
  },
  methods: {
    sortPosts(posts) {
      const sortedPosts = posts;
      posts.forEach((post, i) => {
        if (i > 0) {
          const prevPost = posts[i - 1];
          const nextPost = posts[i + 1];

          // Get current posts details
          const isEssay = post.node.collection === 'Essay'
          const isSecondCol = i % 2 !== 0;

          // Condition where we have an issue where the row above doesn't have a second col
          if (isEssay && isSecondCol && prevPost.node.collection !== 'Essay') {
            sortedPosts[i] = nextPost;
            sortedPosts[i + 1] = post;
          }
        }
      });

      return sortedPosts;
    },
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
          note
          date (format:"MM YYYY")
          collection
          excerpt
          timeToRead
          link
        }
      }
    }
  }
</static-query>

<style lang="scss" scoped>
.post__list {
  margin: 0 auto;
}
</style>