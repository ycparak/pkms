<template>
  <span
    class="interlink-container"
    :class="{
      'space-after' : showSpaceAfter,
      'space-before' : showSpaceBefore,
    }">
    <a
      ref="popoverReference"
      :href="`/${href}`"
      class="interlink"
      :class="`${getPostClass} ${linkIsActivated}`"
      @click.prevent="handleInterlink()"
      @mouseover="handlePopover(true)"
      @mouseleave="handlePopover(false)">
      {{ post.title }}
    </a>
  </span>
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
    spaceBefore: {
      type: String,
      required: false,
      default: 'true'
    },
    spaceAfter: {
      type: String,
      required: false,
      default: 'false'
    }
  },
  data() {
    return {
      post: {
        collection: 'note',
        title: this.href.split('-').join(' ')
      },
      isPopoverVisible: false,
      popoverOptions: {
        popoverReference: null,
        placement: 'right',
        offset: [0, 8]
      }
    }
  },
  computed: {
    linkIsActivated() {
      const currentQueries = this.$route.query.col
      if (currentQueries === undefined) {
        return ''
      } else if (currentQueries === this.href || (currentQueries.includes(this.href) && typeof currentQueries !== 'string')) {
        return 'active'
      } else if (this.href === this.$route.path) {
        return 'active'
      }
      return ''
    },
    showSpaceBefore() {
      const showSpace = this.spaceBefore.toLowerCase()
      if (showSpace && showSpace === 'false') { return false }
      return true
    },
    showSpaceAfter() {
      const showSpace = this.spaceAfter.toLowerCase()
      if (showSpace && showSpace === 'true') { return true }
      return false
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
      this.popoverOptions.popoverReference = this.$refs.popoverReference
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async handleInterlink() {
      this.handlePopover(false)
      const currentQueries = this.$route.query.col
      let newQuery = this.href
      if (currentQueries !== undefined) {
        if (currentQueries.includes(this.href) && typeof currentQueries !== 'string') { return }
        newQuery = [].concat(currentQueries, this.href)
      }
      await this.$router.push({ name: 'slug', query: { col: newQuery } })
    },
    handlePopover(show) {
      this.isPopoverVisible = show
      const popover = {
        isPopoverVisible: this.isPopoverVisible,
        post: this.post,
        popoverOptions: this.popoverOptions
      }
      this.$store.dispatch('columns/setPopover', popover)
    }
  }
}
</script>

<style lang="scss" scoped>
.interlink-container {
  display: inline-block;
  &.space-before { margin-left: 3px; }
  &.space-after { margin-right: 3px; }
}
.interlink {
  text-decoration: none !important;
  background: var(--accent-color);
  padding: 0 4px 1px 4px;
  border-radius: 4px;
  font-size: clamp(14px, 2.5vw, 15px);
  font-weight: 600;
  hyphens: auto;
  &:hover {
    background: var(--accent-color-2);
  }

  &.essay { color: var(--essay-color); }
  &.tweetstorm { color: var(--tweetstorm-color); }
  &.project { color: var(--project-color); }
  &.note { color: var(--note-color); }
  &.quote { color: var(--quote-color); }

  &.active {
    color: var(--background-color);
    &.essay { background: var(--essay-color); }
    &.tweetstorm { background: var(--tweetstorm-color); }
    &.project { background: var(--project-color); }
    &.note { background: var(--note-color); }
    &.quote { background: var(--quote-color); }
  }
}
</style>
