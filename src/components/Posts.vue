<template>
  <div class="posts">
    <article
      v-for="edge in $static.allPost.edges"
      :key="edge.node.id">
      <g-link :to="edge.node.path">
        {{ edge.node.title }}
      </g-link>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: ['collection'],
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
</style>