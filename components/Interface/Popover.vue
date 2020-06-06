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
        this.$emit('closePopover')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-popover {
  position: absolute;
  z-index: 600;
  background: var(--accent-color);
  border-radius: 12px;
  color: var(--text-color);
  box-shadow: var(--card-shadow);
  max-width: 480px;
}
</style>
