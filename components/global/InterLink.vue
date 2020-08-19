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
    }
  }
}
</script>

<style lang="scss" scoped>
.interlink {
  font-weight: 600;
  color: var(--note-color);
  border-radius: 4px;
  @include daynight;
  text-decoration: underline;
  text-decoration-color: transparent !important;
  padding: 0 1px;
  margin: 0 -.5px;
  &.active {
    background-color: var(--note-color);
    color: var(--background-color);
  }
  &:hover, &:active, &:focus {
    text-decoration-color: var(--note-color) !important;
  }
}
</style>
