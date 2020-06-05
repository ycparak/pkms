<template>
  <span
    class="interlink-container"
    :class="{ 'space-after' : showSpaceAfter }">
    <a
      :href="`/${href}`"
      class="interlink"
      :class="`${getPostClass} ${linkIsActivated}`"
      @click.prevent="handleInterlink()">
      <span class="interlink-symbol">
        <MinimizeIcon v-if="linkIsActivated" />
        <MaximizeIcon v-else />
      </span>
      <slot />
    </a>
  </span>
</template>

<script>
import { MinimizeIcon, MaximizeIcon } from 'vue-feather-icons'

export default {
  name: 'Link',
  components: {
    MinimizeIcon,
    MaximizeIcon
  },
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
      post: null,
      linkHovered: false
    }
  },
  computed: {
    linkIsActivated() {
      const currentQueries = this.$route.query.col
      if (currentQueries === undefined) {
        return ''
      } else if (currentQueries === this.href || currentQueries.includes(this.href)) {
        return 'active'
      } else if (this.href === this.$route.path) {
        return 'active'
      }
      return ''
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
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async handleInterlink() {
      const currentQueries = this.$route.query.col
      let newQuery = this.href
      if (currentQueries !== undefined) {
        if (currentQueries.includes(this.href)) { return }
        newQuery = [].concat(currentQueries, this.href)
      }
      await this.$router.push({ name: 'slug', query: { col: newQuery } })
    }
  }
}
</script>

<style lang="scss" scoped>
.interlink-container {
  &::before { content: " "; }
  &.space-after {
    &::after { content: " "; }
  }
}
.interlink-symbol > svg {
  width: 12px;
  max-height: 12px;
  position: relative;
  top: 1px;

}
.interlink {
  text-decoration: none !important;
  background: var(--accent-color);
  padding: 0 6px 2px 6px;
  border-radius: 6px;
  font-size: clamp(14px, 2.5vw, 15px);
  font-weight: 600;
  &.essay { color: var(--essay-color); }
  &.tweetstorm { color: var(--tweetstorm-color); }
  &.project { color: var(--project-color); }
  &.note { color: var(--note-color); }

  &:hover {
    background: var(--accent-color-2);
  }

  &.active {
    color: var(--background-color);
    &.essay { background: var(--essay-color); }
    &.tweetstorm { background: var(--tweetstorm-color); }
    &.project { background: var(--project-color); }
    &.note { background: var(--note-color); }
  }
}
</style>
