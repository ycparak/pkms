<template>
  <a
    :href="href"
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
      if (showSpace === 'true') { return '4px' }
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
      const slug = this.href.split('/')[1]
      this.post = await this.$content(slug).fetch()
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    handleInterlink() {
      const newPath = this.$route.path + this.href
      this.$router.push({ path: newPath })
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
