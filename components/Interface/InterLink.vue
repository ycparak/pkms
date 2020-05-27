<template>
  <a
    :href="`/${href}`"
    class="interlink"
    :class="`${getPostClass}`"
    :style="{ marginRight: calcSpaceAfter }"
    @click.prevent="handleInterlink()">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    href: {
      type: String,
      required: false,
      default: ''
    },
    spaceAfter: {
      type: String,
      required: false,
      default: 'false'
    }
  },
  data() {
    return {
      post: null
    }
  },
  computed: {
    calcSpaceAfter() {
      const showSpace = this.spaceAfter.toLowerCase()
      if (showSpace && showSpace === 'true') { return '4px' }
      return '1px'
    },
    getPostClass() {
      if (this.post) {
        return this.post.collection.toLowerCase()
      }
      return ''
    }
  },
  async mounted() {
    try {
      this.post = await this.$content(this.href).fetch()
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async handleInterlink() {
      const currentQueries = this.$route.query.col
      console.log(this.$route)
      const newQuery = [].concat(currentQueries, this.href)
      const column = { depth: 2, title: this.post.title, header: this.post.collection, collection: this.post.collection, post: this.post }
      await this.$store.dispatch('columns/addColumn', column)
      await this.$router.push({ name: 'slug', query: { col: newQuery } })
    }
  }
}
</script>

<style lang="scss" scoped>
.interlink {
  color: var(--text-color);
  border-radius: 4px;
  text-decoration: none !important;
  padding: 0 4px;
  margin-left: 4px;
  &.essay { background-color: var(--essay-color); }
  &.tweetstorm { background-color: var(--tweetstorm-color); }
  &.project { background-color: var(--project-color); }
  &.note { background-color: var(--note-color); }
}
</style>
