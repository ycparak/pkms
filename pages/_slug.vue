<template>
  <Fragment>
    <Column
      v-for="(column, index) in columns"
      :key="index"
      :index="index"
      :column="column"
      :columns="columns" />
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'Post',
  components: {
    Fragment
  },
  data() {
    return {
      posts: []
    }
  },
  computed: {
    columns() {
      return this.$store.getters['columns/getColumns']
    },
    getColumnTitles() {
      const titles = Array.from(new Set(this.columns.map(c => c.title)))
      return titles.join(' \u2192 ')
    }
  },
  async mounted() {
    const slug = this.$route.path.split('/')[1]
    const queries = this.$route.query.col
    const post = await this.$content(slug).fetch()
    const posts = [post]

    if (queries !== undefined) {
      if (typeof queries === 'string') {
        const queryPost = await this.$content(queries).fetch()
        posts.push(queryPost)
      } else if (queries.length > 1) {
        const queryPromises = queries.map(async (query) => {
          try {
            const queryPromise = await this.$content(query).fetch()
            return queryPromise
          } catch {
            console.log('Error requesting stacked post with slug', slug)
          }
        })
        const queryPosts = await Promise.all(queryPromises)
        posts.push(...queryPosts)
      }
    }

    this.posts = posts

    const columns = this.posts.map((post) => {
      return { depth: 2, title: post.title, header: post.collection, collection: post.collection, post }
    })
    this.$store.dispatch('columns/setColumns', columns)
  },
  head() {
    return {
      title: this.getColumnTitles
    }
  }
}
</script>
