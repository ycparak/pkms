<template>
  <div id="grid" ref="grid" class="grid" @scroll="getScrollPos()">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Grid',
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.$store.dispatch('columns/setLoading', false)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      const vw = window.innerWidth
      this.$store.dispatch('columns/setViewportWidth', vw)
    },
    getScrollPos() {
      const x = this.$refs.grid.scrollLeft
      this.$store.dispatch('columns/setScrollPos', x)
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  @media (min-width: 768px) {
    padding: 28px;
    position: relative;
    margin: 0;
    padding-left: 136px;
    scroll-padding-left: 136px;
  }

  @media (max-width: 767px) {
    padding: 16px;
    padding-top: 92px;
    scroll-padding-left: 16px;
  }
}
</style>
