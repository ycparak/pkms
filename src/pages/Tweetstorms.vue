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
  name: 'Tweetstorms',
  created() {
    const columns = [
      { depth: 1, title: 'Tweetstorms', collection: 'tweetstorms' },
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