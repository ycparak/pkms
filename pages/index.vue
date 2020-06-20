<template>
  <Grid />
</template>

<script>
export default {
  name: 'Index',
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
