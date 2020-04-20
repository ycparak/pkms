<template>
  <div class="post__list">
    <PostListItem
      v-for="(edge, index) in $static.allPost.edges"
      :key="edge.node.id"
      :post="edge.node"
      :collection="collection"
      :last-index="$static.allPost.edges.length - index"
      />
  </div>
</template>

<script>
import PostListItem from '~/components/PostListItem';

export default {
  name: 'PostList',
  props: ['collection'],
  components: {
    PostListItem
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
// .post__list {
//   display: flex;
//   flex-wrap: wrap;
// }
</style>