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
      { depth: 0, title: 'About', header: 'About', },
      // { depth: 1, title: 'All', header: 'All', collection: 'all' },
      { depth: 1, title: 'Projects', header: 'Projects', collection: 'projects' },
      { depth: 1, title: 'Essays', header: 'Essays', collection: 'essays' },
      { depth: 1, title: 'Tweetstorms', header: 'Tweetstorms', collection: 'tweetstorms' },
      { depth: 1, title: 'Notes', header: 'Notes', collection: 'notes' },
      { depth: 1, title: 'Quotes', header: 'Quotes', collection: 'quotes' },
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