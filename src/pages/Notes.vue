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
  name: 'Notes',
  computed: {
    columns() {
      return [
        { depth: 1, title: 'Notes', collection: 'notes' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>