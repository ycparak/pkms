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

/**
 * TODO: Sort posts by date
 * TODO: Add correctly formatted date
 * TODO: Add read time
 * TODO: Look at refactoring and perhaps simplifying the code now that we're using Nuxt
 */

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
    const columns = [
      { depth: 0, title: 'About', header: 'About' },
      { depth: 1, title: 'All', header: 'All', collection: 'all' },
      { depth: 1, title: 'Projects', header: 'Projects', collection: 'projects' },
      { depth: 1, title: 'Essays', header: 'Essays', collection: 'essays' },
      { depth: 1, title: 'Tweetstorms', header: 'Tweetstorms', collection: 'tweetstorms' },
      { depth: 1, title: 'Notes', header: 'Notes', collection: 'notes' },
      { depth: 1, title: 'Quotes', header: 'Quotes', collection: 'quotes' }
    ]
    this.$store.dispatch('columns/setColumns', columns)
  }
}
</script>

<style lang="scss" scoped>
</style>
