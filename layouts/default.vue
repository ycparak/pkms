<template>
  <div class="site" :class="theme">
    <div class="border border-top"></div>
    <div class="border border-left"></div>
    <div class="border border-right"></div>
    <div class="border border-bottom"></div>
    <TheNavbar @toggleTheme="toggleTheme" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      prevTheme: 'home',
      theme: 'home',
    }
  },
  methods: {
    toggleTheme(theme = null) {
      if (theme) {
        this.theme = theme
      } else {
        this.theme = this.prevTheme
      }
    },
  },
}
</script>

<style lang="scss">
.site {
  padding: 8px;
  @media (max-width: 768px) {
    padding: 0;
  }
}
.border {
  position: fixed;
  background: var(--selected);
  transition: all .2s linear;
  &-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
  }
  &-left {
    top: 0;
    left: 0;
    height: 100%;
    width: 8px;
  }
  &-right {
    top: 0;
    right: 0;
    height: 100%;
    width: 8px;
  }
  &-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
  }
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
