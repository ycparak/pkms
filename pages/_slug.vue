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
    const slug = params.slug || 'index'
    const post = await $content(slug).fetch()

    return { post }
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
    const { title, collection } = this.post
    const columns = [
      { depth: 2, title, header: collection, collection, post: this.post }
    ]
    this.$store.dispatch('columns/setColumns', columns)
  },
  head() {
    return {
      title: this.getColumnTitles
    }
  }
}
</script>
