<template>
  <Layout v-slot:default="slotProps">
    <Column
      v-for="(column, index) in columns"
      :key="index"
      :index="index"
      :column="column"
      :columns="columns"
      :slot-props="slotProps"
    />
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    id
    path
    title
    date (format:"DD MMMM YYYY")
    collection
    tags
    excerpt
    headings {
      depth
      value
      anchor
    }
    content
  }
}
</page-query>

<script>
export default {
  name: 'Post',
  created() {
    const { title, collection } = this.$page.post;
    const columns = [
      { depth: 2, title, header: collection, collection, post: this.$page.post },
    ]
    this.$store.commit('setColumns', columns);
  },
  computed: {
    columns() {
      return this.$store.getters.columns;
    }
  },
}
</script>