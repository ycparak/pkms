<template>
  <header class="header">
    <Container>
      <nav class="nav">
        <div class="navbar navbar-left text-left">
          <span class="logo">
            MumblingIO
          </span>
          <a class="nav-icon" href="https://twitter.com/MumblingIO" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M32 7.075a12.941 12.941 0 0 1-3.769 1.031 6.601 6.601 0 0 0 2.887-3.631 13.21 13.21 0 0 1-4.169 1.594A6.565 6.565 0 0 0 22.155 4a6.563 6.563 0 0 0-6.563 6.563c0 .512.056 1.012.169 1.494A18.635 18.635 0 0 1 2.23 5.195a6.56 6.56 0 0 0-.887 3.3 6.557 6.557 0 0 0 2.919 5.463 6.565 6.565 0 0 1-2.975-.819v.081a6.565 6.565 0 0 0 5.269 6.437 6.574 6.574 0 0 1-2.968.112 6.588 6.588 0 0 0 6.131 4.563 13.17 13.17 0 0 1-9.725 2.719 18.568 18.568 0 0 0 10.069 2.95c12.075 0 18.681-10.006 18.681-18.681 0-.287-.006-.569-.019-.85A13.216 13.216 0 0 0 32 7.076z" />
            </svg>
          </a>
          <button
            @click="$emit('darkModeToggle')"
            class="dark-mode-toggle"
          />
        </div>
      </nav>
    </Container>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isDay: true
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 10px;
  top: 10px;
  right: 10px;
  font-family: HKGrotesk, -apple-system, BlinkMacSystemFont, Avenir, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 27px;
  font-feature-settings: "kern" 1;
  font-kerning: normal;
  font-style: normal;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
  @include colors;
  @include daynight;
}
.nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--background-accent-color);
  border-radius: 2px;
  height: 80px;
  background: var(--background-color);
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
.logo {
  display: inline-block;
  font-size: 21px;
  font-weight: 900;
  margin-right: 20px;
}
.nav-item {
  display: inline-block;
  margin: 0 12px;
  &:last-child {
    margin-right: 0
  }
  &:last-child {
    margin-left: 0
  }
}
.profile-image {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>
