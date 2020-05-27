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
  name: 'Index',
  components: {
    Fragment
  },
  computed: {
    columns() {
      const cols = this.$store.getters['columns/getColumns']
      return cols
    }
  },
  mounted() {
    // These columns should be togglable at some point
    const columns = [
      { depth: 0, header: 'About' },
      { depth: 1, header: 'Projects', collection: 'projects' },
      { depth: 1, header: 'Essays', collection: 'essays' },
      { depth: 1, header: 'Tweetstorms', collection: 'tweetstorms' },
      { depth: 1, header: 'Notes', collection: 'notes' },
      { depth: 1, header: 'Quotes', collection: 'quotes' }
    ]
    this.$store.dispatch('columns/setColumns', columns)
  }
}
</script>

<style lang="scss" scoped>
</style>
