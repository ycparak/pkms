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
  name: 'Projects',
  computed: {
    columns() {
      return [
        { depth: 1, title: 'Projects', collection: 'projects' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>