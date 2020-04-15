<template>
  <div class="site">
    <div class="site-wrapper">
      <Header />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
html, body {
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
body {
  &::before, &::after {
    background-color: var(--background-accent-color);
    content: "";
    height: 10px;
    left: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 111;
    @include daynight;
    @media (max-width: 576px) {
      display: none;
    }
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
}
.site {
  overflow-x: hidden;
  min-height: 100vh;

  &::before, &::after {
    background-color: var(--background-accent-color);
    bottom: 0;
    content: "";
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 10px;
    height: 100%;
    z-index: 111;
    @include daynight;
    @media (max-width: 576px) {
      display: none;
    }
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
}
.site-wrapper {
  padding: 10px;
  @media (max-width: 576px) {
    padding: 0;
  }
}

p {
  font-size: 21px;
  margin: 20px 0;
  line-height: 32px;
  text-align: left;
  font-weight: 400;
  color: var(--text-color);
}
h1 {
  font-size: 64px;
  line-height: 1;
  font-weight: 900;
  color: var(--text-color);
}

a {
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
}

.username-link {
  background:
     linear-gradient(
       to bottom, var(--twitter-color) 0%,
       var(--twitter-color) 100%
     );
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 2px 2px;
  border-radius: 2px;
  color: var(--text-color);
  &:hover {
    background-size: 2px 50px;
    color: #fff;
    padding: 4px 18px;
    height: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
  }
}

.hero-content--fixed {
  position: fixed;
  top: calc(10vh + 100px);
  width: 440px;
}
.hero {
  margin-top: calc(10vh + 90px);
  display: grid;
  grid-template-columns: 440px 1fr;
  grid-gap: 10vw;
  height: 100%;
}
.hero-actions {
  grid-column-start: 2;
  padding-top: 8px;
}
</style>
