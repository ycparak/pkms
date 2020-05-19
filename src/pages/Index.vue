<template>
  <Layout v-slot:default="slotProps">
    <Column
      v-for="(column, index) in columns"
      :key="index"
      :index="index"
      :column="column"
      :columns="columns"
      :slot-props="slotProps" />
  </Layout>
</template>

<script>
export default {
  name: 'Index',
  created() {
    const columns = [
      { depth: 0, header: 'About' },
      { depth: 1, header: 'All', collection: 'all' },
      { depth: 1, header: 'Projects', collection: 'projects' },
      { depth: 1, header: 'Essays', collection: 'essays' },
      { depth: 1, header: 'Tweetstorms', collection: 'tweetstorms' },
      { depth: 1, header: 'Notes', collection: 'notes' },
      { depth: 1, header: 'Quotes', collection: 'quotes' },
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