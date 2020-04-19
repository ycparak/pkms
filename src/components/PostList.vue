<template>
  <div class="post__list">
    <PostListItem
      v-for="edge in $static.allPost.edges"
      :key="edge.node.id"
      :post="edge.node"
      :collection="collection"
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
.post__list {
  display: flex;
  flex-wrap: wrap;
  padding-top: 32px;
  margin: -4px;
}
</style>