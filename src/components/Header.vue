<template>
  <header class="header">
    <div class="header__profile">
      <div class="header__logo"></div>
    </div>
    <div class="header__controls">
      <button
        @click="darkModeToggle()"
        class="header__darkmode"
      />
    </div>
  </header>
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
  position: fixed;
  left: 44px;
  top: 44px;
  right: 44px;
  display: grid;
  grid-template-columns: 75% 1fr;
  align-items: center;
  @include colors;
  @include daynight;
  @media (max-width: 576px) {
    top: 8px;
    left: 8px;
    right: 8px;
  }
  @media (max-width: 768px) {
    top: 24px;
    left: 24px;
    right: 24px;
  }
}
.header__controls {
  text-align: right;
}
.header__logo {
  width: 44px;
  height: 44px;
  background: var(--text-color);
  border-radius: 50%;
  margin-right: 8px;
}
.header__darkmode {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  overflow: hidden;
  transition-property: box-shadow;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  z-index: 100;
  box-shadow: var(--icon-toggle-shadow);
  position: relative;
  top: 1.4px;
  margin: 0;
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
</style>
