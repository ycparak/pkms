<template>
  <Layout v-slot:default="slotProps">
    <Column
      v-for="(column, index) in columns"
      :key="index"
      :column="column"
      :slot-props="slotProps" />
  </Layout>
</template>

<script>


export default {
  name: 'Index',
  created() {
    const columns = [
      { depth: 0, title: 'About' },
      { depth: 1, title: 'All', collection: 'all' },
      { depth: 1, title: 'Projects', collection: 'projects' },
      { depth: 1, title: 'Essays', collection: 'essays' },
      { depth: 1, title: 'Tweetstorms', collection: 'tweetstorms' },
      { depth: 1, title: 'Notes', collection: 'notes' },
      { depth: 1, title: 'Quotes', collection: 'quotes' },
    ]
    this.$store.commit('setColumns', columns);
  },
  computed: {
    columns() {
      return this.$store.getters.columns;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>