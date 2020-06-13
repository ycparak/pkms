<template>
  <Fragment>
    <span
      class="interlink-container"
      :class="{ 'space-after' : showSpaceAfter }">
      <a
        ref="popoverReference"
        :href="`/${href}`"
        class="interlink"
        :class="`${getPostClass} ${linkIsActivated}`"
        @click.prevent="handleInterlink()"
        @mouseover="isPopoverVisible = true"
        @mouseleave="isPopoverVisible = false">
        {{ post.title }}
      </a>
    </span>
    <!-- Interlink hover popover -->
    <Popover
      v-if="isPopoverVisible"
      :popover-options="popoverOptions"
      :is-popover-visible="isPopoverVisible">
      <PopoverContent :post="post" />
    </Popover>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Popover from '@/components/Interface/Popover'

export default {
  name: 'Link',
  components: {
    Fragment,
    Popover
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
      this.isPopoverVisible = false
      const currentQueries = this.$route.query.col
      let newQuery = this.href
      if (currentQueries !== undefined) {
        if (currentQueries.includes(this.href) && typeof currentQueries !== 'string') { return }
        newQuery = [].concat(currentQueries, this.href)
      }
      await this.$router.push({ name: 'slug', query: { col: newQuery } })
    }
  }
}
</script>

<style lang="scss" scoped>
.interlink-container {
  &:before { content: " "; }
  &.space-after {
    margin-right: 3px;
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
  padding: 0 0 1px 4px;
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

  &.active {
    color: var(--background-color);
    &.essay { background: var(--essay-color); }
    &.tweetstorm { background: var(--tweetstorm-color); }
    &.project { background: var(--project-color); }
    &.note { background: var(--note-color); }
  }
}
</style>
