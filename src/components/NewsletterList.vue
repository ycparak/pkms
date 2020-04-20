<template>
  <div class="newsletter__list">
    <NewsletterListItem
      v-for="(edge, index) in $static.allNewsletter.edges"
      :key="edge.node.id"
      :newsletter="edge.node"
      :last-index="$static.allNewsletter.edges.length + 100 - index"
      :collection="slotProps.collection"
      :set-collection="slotProps.setCollection"
      :set-next-collection="slotProps.setNextCollection"
      :revert-collection="slotProps.revertCollection"
      />
  </div>
</template>

<script>
import NewsletterListItem from '~/components/NewsletterListItem';

export default {
  name: 'NewsletterList',
  props: ['slotProps'],
  components: {
    NewsletterListItem
  },
}
</script>

<static-query>
  {
    allNewsletter {
      edges {
        node {
          id
          issue
          path
          title
          date (format:"DD MM YYYY")
          timeToRead
        }
      }
    }
  }
</static-query>

<style lang="scss" scoped>
</style>