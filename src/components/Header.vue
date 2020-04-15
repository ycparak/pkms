<template>
  <header class="header">
    
  </header>
  <!-- <a class="nav-icon" href="https://twitter.com/MumblingIO" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M32 7.075a12.941 12.941 0 0 1-3.769 1.031 6.601 6.601 0 0 0 2.887-3.631 13.21 13.21 0 0 1-4.169 1.594A6.565 6.565 0 0 0 22.155 4a6.563 6.563 0 0 0-6.563 6.563c0 .512.056 1.012.169 1.494A18.635 18.635 0 0 1 2.23 5.195a6.56 6.56 0 0 0-.887 3.3 6.557 6.557 0 0 0 2.919 5.463 6.565 6.565 0 0 1-2.975-.819v.081a6.565 6.565 0 0 0 5.269 6.437 6.574 6.574 0 0 1-2.968.112 6.588 6.588 0 0 0 6.131 4.563 13.17 13.17 0 0 1-9.725 2.719 18.568 18.568 0 0 0 10.069 2.95c12.075 0 18.681-10.006 18.681-18.681 0-.287-.006-.569-.019-.85A13.216 13.216 0 0 0 32 7.076z" />
    </svg>
  </a>
  <button
    @click="darkModeToggle()"
    class="dark-mode-toggle"
  /> -->
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      darkMode: false
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
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @include colors;
  @include daynight;
}
.dark-mode-toggle {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  transition-property: box-shadow;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  z-index: 100;
  box-shadow: var(--icon-toggle-shadow);
  @include daynight;
  &::after {
    background: var(--text-color);
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    z-index: 90;
    transform: translateX(var(--darkmode-toggle-translate));
    @include daynight;
  }
  &:hover {
    box-shadow: var(--icon-toggle-shadow-hover);
  }
  &:hover::after {
    background: var(--neutral-color);
  }
}
.nav-icon {
  fill: var(--text-color);
  display: inline-block;
  margin-right: 12px;
  svg {
    display: block;
    height: 15px;
  }
  &:hover {
    fill: var(--neutral-color);
  }
}
</style>
