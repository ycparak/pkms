<template>
  <div class="site">
    <div
      class="wrapper"
      :class="{ blur: showControlPanel }">
      <Navbar :show-panel="showControlPanel" />
      <Grid>
        <nuxt />
      </Grid>
    </div>
    <ControlPanel :show-panel="showControlPanel" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      showControlPanel: false
    }
  },
  methods: {
    toggleControlPanel() {
      this.showControlPanel = !this.showControlPanel
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
