<template>
  <Fragment>
    <div
      ref="basePopoverContent"
      class="base-popover">
      <slot />
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { createPopper } from '@popperjs/core'

export default {
  name: 'Popover',
  components: {
    Fragment
  },
  props: {
    popoverOptions: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      popperInstance: null
    }
  },
  mounted() {
    this.initPopper()
  },
  destroyed() {
    this.destroyPopover()
  },
  methods: {
    initPopper() {
      const modifiers = {}
      const { popoverReference, offset, placement } = this.popoverOptions

      this.popperInstance = createPopper(
        popoverReference,
        this.$refs.basePopoverContent,
        {
          placement,
          modifiers: [
            {
              name: 'offset',
              options: { offset }
            }
          ]
        }
      )
    },
    destroyPopover() {
      if (this.popperInstance) {
        this.popperInstance.destroy()
        this.popperInstance = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-popover {
  position: absolute;
  display: block;
  z-index: 800 !important;
  background-color: var(--navbar-color);
  border: 1px solid var(--line-color);
  border-radius: 8px;
  color: var(--text-color);
  max-width: 480px;
  box-shadow: var(--tooltip-shadow);
}
</style>
