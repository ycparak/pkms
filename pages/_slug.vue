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
    console.log(slug)
    const post = await $content(slug).fetch()

    return { post }
  },
  computed: {
    columns() {
      return this.$store.getters['columns/getColumns']
    }
  },
  created() {
    const { title, collection } = this.post
    const columns = [
      { depth: 2, title, header: collection, collection, post: this.post }
    ]
    this.$store.dispatch('columns/setColumns', columns)
  }
}
</script>
