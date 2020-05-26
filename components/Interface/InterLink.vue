<template>
  <a
    :href="href"
    class="interlink"
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
    title: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      post: null
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
  display: block;
  color: var(--essays-color);
}
</style>
