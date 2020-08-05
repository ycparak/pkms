<template>
  <div class="site">
    <div class="wrapper">
      <Navbar />
      <nuxt />
      <Popover
        v-if="popover && popover.isPopoverVisible"
        :popover-options="popover.popoverOptions"
        :is-popover-visible="popover.isPopoverVisible">
        <PopoverContent :post="popover.post" />
      </Popover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    popover() {
      return this.$store.getters['columns/getPopover']
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  filter: blur(0);
  opacity: 1;
  @include daynight;
  &.blur {
    filter: blur(12px);
    opacity: .8;
  }
}
</style>
