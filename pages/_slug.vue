<template>
  <Grid />
</template>

<script>
export default {
  name: 'Post',
  async fetch() {
    // Get slug, query parameters and use to get our next request strings
    const slug = this.$route.path.split('/')[1]
    const queryParams = this.$route.query.col
    const requestStrings = this.determineRequestStrings(slug, queryParams)

    // Determine posts to show
    if (this.prevRequestStrings === null) {
      // New page load (we don't have a prev query in state) - fetch all posts from query
      const posts = await this.fetchAllQueriedPosts(requestStrings)
      this.setColumns(posts)
    } else if (requestStrings.length > this.prevRequestStrings.length) {
      // Next query is longer than prev query - we going to need to fetch only the next post
      const nextRequest = requestStrings[requestStrings.length - 1]
      const nextPost = await this.fetchNextQueriedPost(nextRequest)
      this.addColumn(nextPost)
    } else if (requestStrings.length < this.prevRequestStrings.length) {
      // Next query is shorter than prev query - We don't need to fetch anything rather we have to get rid of a post
      const postToRemove = this.prevRequestStrings.filter(prevString => !requestStrings.includes(prevString))
      const postSlug = `/${postToRemove}`
      this.removeColumn(postSlug)
    }

    this.prevRequestStrings = requestStrings
  },
  data() {
    return {
      prevRequestStrings: null,
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
  watch: {
    '$route.query': '$fetch'
  },
  methods: {
    determineRequestStrings(slug, queryParams) {
      // Determine the next query we going to have to run
      let requestStrings = [slug]
      if (queryParams && typeof queryParams !== 'string') {
        requestStrings = [].concat(slug, queryParams)
      } else if (queryParams) {
        requestStrings.push(queryParams)
      }

      return requestStrings
    },
    async fetchAllQueriedPosts(requestStrings) {
      const queryPromises = requestStrings.map(async (query) => {
        const promise = await this.$content(query).fetch()
        return promise
      })
      const posts = await Promise.all(queryPromises)
      return posts
    },
    async fetchNextQueriedPost(query) {
      const post = await this.$content(query).fetch()
      return post
    },
    setColumns(posts) {
      const columns = posts.map((post) => {
        return {
          depth: 2,
          title: post.title,
          slug: post.path,
          header: post.collection,
          collection: post.collection,
          post
        }
      })
      this.$store.dispatch('columns/setColumns', columns)
    },
    addColumn(post) {
      const column = {
        depth: 2,
        title: post.title,
        slug: post.path,
        header: post.collection,
        collection: post.collection,
        post
      }
      this.$store.dispatch('columns/addColumn', column)
    },
    removeColumn(slug) {
      const columnToRemove = this.columns.findIndex(col => col.slug === slug)
      this.$store.dispatch('columns/removeColumn', columnToRemove)
    }
  },
  head() {
    return {
      title: this.getColumnTitles
    }
  }
}
</script>
