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
    const columns = [
      { depth: 0, header: 'About', title: 'About' },
      { depth: 1, header: 'All', title: 'All', collection: 'all' }
    ]
    this.$store.dispatch('columns/setColumns', columns)
  }
}
</script>

<style lang="scss" scoped>
</style>
