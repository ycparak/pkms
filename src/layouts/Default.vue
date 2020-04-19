<template>
  <div :class="`body ${collection}`">
    <div :class="`site ${collection}`">
      <div class="site__wrapper">
        <Header />
        <slot />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      collection: 'all',
      collectionPrev: 'all',
      collectionNext: 'all',
    }
  },
  methods: {
    setPrimaryColor(collection) {
      this.collection = collection;
    }
  }
}
</script>

<style lang="scss" scoped>
.site {
  overflow-x: hidden;
  min-height: 100vh;

  &::before, &::after {
    background-color: var(--accent-color);
    bottom: 0;
    content: "";
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 8px;
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

  &.all {
    &::before, &::after {
      background-color: var(--accent-color);
    }
  }
  &.essays {
    &::before, &::after {
      background-color: var(--essays-color);
    }
  }
  &.projects {
    &::before, &::after {
      background-color: var(--projects-color);
    }
  }
  &::before, &::after {
    background-color: var(--twitter-color);
  }
}
.site__wrapper {
  padding: 10px;
  @media (max-width: 576px) {
    padding: 0;
  }
}
.site__content {
  padding-top: 144px;
}
</style>
