<template>
  <div class="site">
    <div
      class="wrapper"
      :class='{ blur: showControlPanel }'>
      <Navbar :show-panel="showControlPanel" />
      <Grid>
        <slot />
      </Grid>
    </div>
    <ControlPanel :show-panel="showControlPanel" />
  </div>
</template>

<script>
import Navbar from '~/components/Navigation/Navbar'
import ControlPanel from '~/components/Interface/ControlPanel'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    ControlPanel
  },
  data() {
    return {
      darkMode: false,
      showControlPanel: false,
    }
  },
  mounted() {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme)
      if (currentTheme === 'dark') {
        this.darkMode = true
      }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark')
      this.darkMode = true
    }
  },
  methods: {
    darkModeToggle() {
      if (!this.darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      }
      this.darkMode = !this.darkMode
    },
    toggleControlPanel() {
      this.showControlPanel = !this.showControlPanel;
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
