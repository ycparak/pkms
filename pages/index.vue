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
  }
}
</script>

<style lang="scss" scoped>
</style>
