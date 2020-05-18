<template>
  <div class="site">
    <Navbar />
    <Grid>
      <slot />
    </Grid>
  </div>
</template>

<script>
import Navbar from '~/components/Navigation/Navbar'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
  data() {
    return {
      darkMode: false,
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
  }
}
</script>

<style lang="scss" scoped>
</style>
