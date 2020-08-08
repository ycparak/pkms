<template>
  <Fragment>
    <a
      ref="popoverReference"
      :href="`/${getLink}`"
      class="interlink"
      :class="`${classnames}`"
      @click.prevent="handleInterlink()"
      @mouseover="handlePopover(true)"
      @mouseleave="handlePopover(false)">
      <slot>{{ post.title }}</slot>
    </a>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import interLinks from '@/mixins/interLinks'

export default {
  name: 'Link',
  components: {
    Fragment
  },
  mixins: [interLinks],
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
    includedPost: {
      type: Object,
      required: false,
      default: null
    }
  },
  async mounted() {
    if (this.includedPost) {
      this.post = this.includedPost
    } else {
      try {
        this.post = await this.$content(this.href).fetch()
      } catch (error) {
        console.log(error)
      }
    }
    this.popoverOptions.popoverReference = this.$refs.popoverReference
  }
}
</script>

<style lang="scss" scoped>
.interlink {
  text-decoration: none !important;
  font-weight: 600;
  color: var(--note-color);
  transition: all .2s ease;
  border-radius: 4px;
  &:hover, &.active {
    background: var(--note-color);
    color: var(--background-color);
  }
}
</style>
