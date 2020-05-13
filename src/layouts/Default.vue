<template>
  <div class="site">
    <Navbar />
    <div class="wrapper">
      <slot
        :collection="collection"
        :collection-next="collectionNext"
        :hovered-post="hoveredPost"
        :set-collection="setCollection"
        :set-next-collection="setNextCollection"
        :set-hovered-post="setHoveredPost"
        :revert-collection="revertCollection" />
    </div>
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
      collection: 'all',
      collectionPrev: 'all',
      collectionNext: 'all',
      hoveredPost: null,
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
  computed: {
    getHoveredCollectionState() {
      if (this.collection !== this.collectionNext) {
        return this.collectionNext;
      }
      return this.collection;
    },
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
    setCollection(collection) {
      this.collectionPrev = collection;
      this.collection = collection;
      this.setCurrentColor(collection);
    },
    setNextCollection(collection) {
      this.collectionNext = collection;
      this.setCurrentColor(collection);
    },
    setHoveredPost(post) {
      if (post) this.hoveredPost = post;
      else this.hoveredPost = null;
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
        case 'note':
          root.style.setProperty('--current-color', 'var(--notes-color)');
          root.style.setProperty('--current-fill-color', 'var(--notes-color)');
          break;
        case 'quote':
          root.style.setProperty('--current-color', 'var(--quotes-color)');
          root.style.setProperty('--current-fill-color', 'var(--quotes-color)');
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
</style>
