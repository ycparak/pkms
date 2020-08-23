<template>
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
</style>
