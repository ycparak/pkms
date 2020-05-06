<template>
  <div :class="`site ${getHoveredCollectionState}`">
    <div class="site__wrapper">
      <Header />
      <slot
        :collection="collection"
        :collection-next="collectionNext"
        :set-collection="setCollection"
        :set-next-collection="setNextCollection"
        :revert-collection="revertCollection" />
      <SocialButtons />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import SocialButtons from '~/components/SocialButtons'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    SocialButtons
  },
  data() {
    return {
      collection: 'all',
      collectionPrev: 'all',
      collectionNext: 'all',
      isFromIndex: false,
    }
  },
  mounted() {
    this.setCollection('all');
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
      this.setCurrentColor(collection);
    },
    setNextCollection(collection) {
      this.collectionNext = collection;
      this.setCurrentColor(collection);
    },
    revertCollection() {
      this.collectionNext = this.collection;
      this.setCurrentColor(this.collection);
    },
    setCurrentColor(collection) {
      const root = document.documentElement;
      switch (collection) {
        case 'essay':
          root.style.setProperty('--current-color', 'var(--essays-color)');
          root.style.setProperty('--current-fill-color', 'var(--essays-color)');
          break;
        case 'tweetstorm':
          root.style.setProperty('--current-color', 'var(--twitter-color)');
          root.style.setProperty('--current-fill-color', 'var(--twitter-color)');
          break;
        case 'project':
          root.style.setProperty('--current-color', 'var(--projects-color)');
          root.style.setProperty('--current-fill-color', 'var(--projects-color)');
          break;
        default:
          root.style.setProperty('--current-color', 'var(--accent-color)');
          root.style.setProperty('--current-fill-color', 'var(--text-color)');
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.site {
  overflow-x: hidden;
  min-height: 100vh;

  &::before, &::after {
    background-color: var(--current-color);
    bottom: 0;
    content: "";
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 8px;
    height: 100%;
    z-index: 100;
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
