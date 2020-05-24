<template>
  <Layout v-slot:default="slotProps">
    <Column
      v-for="(column, index) in columns"
      :key="index"
      :index="index"
      :column="column"
      :columns="columns"
      :slot-props="slotProps" 
      :post="$page.post"
    />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  post (path: $path) {
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
    timeToRead
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
      { depth: 2, title, header: collection, collection, isMaximised: false },
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