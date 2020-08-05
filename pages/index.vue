<template>
  <Grid />
</template>

<script>
export default {
  name: 'Index',
  mounted() {
    const columns = [
      { depth: 0, header: 'About', title: 'About', date: '04.08.2020' },
      { depth: 1, header: 'All Notes', title: 'All', collection: 'all' }
    ]
    this.$store.dispatch('columns/setColumns', columns)
  }
}
</script>

<style lang="scss" scoped>
</style>
