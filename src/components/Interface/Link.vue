<template>
  <a
    :href="href"
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
      required: true,
    }
  },
  data() {
    return {
      post: null,
    };
  },
  async mounted () {
    try {
      const results = await this.$fetch(this.href)
      this.post = results.data.post;
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    handleInterlink() {
      const { title, collection } = this.post;
      const column = { depth: 2, title, header: collection, collection, post: this.post };
      this.$store.commit('addColumn', column);
    },
  }
}
</script>

<style lang="scss" scoped>
a {
  color: var(--essays-color);
}
</style>