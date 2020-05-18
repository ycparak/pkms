<template>
  <Layout v-slot:default="slotProps">
    <!-- <Column :column="$page.post" /> -->
    <div v-html="$page.post.content"></div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  post (path: $path) {
    id
    path
    title
    date (format:"DD MM YYYY")
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
}
</script>