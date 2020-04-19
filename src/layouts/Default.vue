<template>
  <div :class="`body ${getHoveredCollectionState}`">
    <div :class="`site ${getHoveredCollectionState}`">
      <div class="site__wrapper">
        <Header />
        <slot :collection="collection" />
        <Footer :collection="collection" />
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
  computed: {
    getHoveredCollectionState() {
      if (this.collection !== this.collectionNext) {
        return this.collectionNext;
      }
      return this.collection;
    }
  },
  methods: {
    setCollection(collection) {
      this.collectionPrev = collection;
      this.collection = collection;
    },
    setNextCollection(collection) {
      this.collectionNext = collection;
    },
    revertCollection() {
      this.collectionNext = this.collection;
    },
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
