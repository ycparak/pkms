<template>
  <a
    :href="href"
    class="interlink"
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
      if (showSpace === 'true') { return '4px' }
      return '1px'
    }
  },
  async mounted() {
    try {
      const slug = this.href.split('/')[1]
      this.post = await this.$content(slug).fetch()
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    handleInterlink() {
      const { title, collection } = this.post
      const column = { depth: 2, title, header: collection, collection, post: this.post }
      this.$store.dispatch('columns/addColumn', column)
    }
  }
}
</script>

<style lang="scss" scoped>
.interlink {
  background: var(--twitter-color);
  color: var(--text-color);
  border-radius: 4px;
  text-decoration: none !important;
  padding: 0 4px;
  margin-left: 4px;
}
</style>
