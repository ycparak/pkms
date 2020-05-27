<template>
  <Fragment>
    <Column
      v-for="(column, index) in columns"
      :key="index"
      :index="index"
      :column="column"
      :columns="columns" />
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'Post',
  components: {
    Fragment
  },
  async asyncData({ $content, params, error }) {
    const slugs = params.pathMatch.split('/')

    const promises = await slugs.map(async (slug) => {
      try {
        if (slug.length > 0) {
          const post = await $content(slug).fetch()
          if (post) { return post }
        }
      } catch {
        return null
      }
    })

    const posts = await Promise.all(promises)
    return { posts }
  },
  computed: {
    columns() {
      return this.$store.getters['columns/getColumns']
    },
    getColumnTitles() {
      const titles = Array.from(new Set(this.columns.map(c => c.title)))
      return titles.join(' | ')
    }
  },
  created() {
    const columns = this.posts.map((post) => {
      return { depth: 2, header: post.collection, collection: post.collection, post }
    })
    this.$store.dispatch('columns/setColumns', columns)
  },
  head() {
    return {
      title: this.getColumnTitles
    }
  }
}
</script>
