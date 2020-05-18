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
  computed: {
    columns() {
      return [
        { depth: 1, title: 'Tweetstorms', collection: 'tweetstorms' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>