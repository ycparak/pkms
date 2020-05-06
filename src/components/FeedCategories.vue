<template>
  <div class="categories">
    <div class="categories__container">
      <div
        class="category"
        :class="{ 
          current: collection === 'all' && (collectionNext === null || collectionNext === 'all'),
          hovered: collectionNext === 'all' && collection !== 'all',
        }"
        @mouseover="mouseoverCollection('all')"
        @mouseleave="mouseleaveCollection('all')"
        @click="setCollection('all')">
        <span class="category__color all"></span>
        <span class="category__text all">All</span>
      </div>
      <div
        class="category"
        :class="{ 
          current: collection === 'essay' && (collectionNext === null || collectionNext === 'essay'),
          hovered: collectionNext === 'essay' && collection !== 'essay',
        }"
        @mouseover="mouseoverCollection('essay')"
        @mouseleave="mouseleaveCollection('essay')"
        @click="setCollection('essay')">
        <span class="category__color essay"></span>
        <span class="category__text essay">Essays</span>
      </div>
      <div
        class="category"
        :class="{ 
          current: collection === 'tweetstorm' && (collectionNext === null || collectionNext === 'tweetstorm'),
          hovered: collectionNext === 'tweetstorm' && collection !== 'tweetstorm',
        }"
        @mouseover="mouseoverCollection('tweetstorm')"
        @mouseleave="mouseleaveCollection('tweetstorm')"
        @click="setCollection('tweetstorm')">
        <span class="category__color tweetstorm"></span>
        <span class="category__text tweetstorm">Tweetstorms</span>
      </div>
      <div
        class="category"
        :class="{ 
          current: collection === 'project' && (collectionNext === null || collectionNext === 'project'),
          hovered: collectionNext === 'project' && collection !== 'project',
        }"
        @mouseover="mouseoverCollection('project')"
        @mouseleave="mouseleaveCollection('project')"
        @click="setCollection('project')">
        <span class="category__color project"></span>
        <span class="category__text project">Projects</span>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon, TwitterIcon } from 'vue-feather-icons';

export default {
  name: 'FeedCategories',
  props: ['collection', 'collectionNext'],
  components: {
    MailIcon,
    TwitterIcon
  },
  methods: {
    isHomePage() {
      if (this.$route.path === '/') return true;
      return false;
    },
    setCollection(collection) {
      this.$parent.setCollection(collection)
    },
    mouseoverCollection(collection) {
      this.$parent.setNextCollection(collection)
    },
    mouseleaveCollection() {
      this.$parent.revertCollection();
    }
  },
}
</script>

<style lang="scss" scoped>
.categories {
  position: fixed;
  left: 44px;
  bottom: 44px;
  color: var(--text-color);
  pointer-events: none;
  @include daynight;
  @media (max-width: 1500px) {
    bottom: 32px;
    left: 32px;
  }
  @media (max-width: 768px) {
    display: none;
  }
}

.categories__container {
  pointer-events: visible;
  text-align: left;
  position: relative;
}

.category {
  display: block;
  font-size: 15px;
  line-height: 15px;
  padding: 8px 0;
  color: var(--accent-color-3);
  font-weight: 400;
  cursor: pointer;
  @include daynight;
  &:first-child { padding-top: 0 }
  &:last-child { padding-bottom: 0 }

  .category__text {
    display: inline-block;
  }

  .category__color {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 8px;
    background: var(--accent-color-2);
    text-align: center;
    border-radius: 50%;
    position: relative;
    top: -1px;
    opacity: 0.2;
    &.essay  {
      background: var(--essays-color);
    }
    &.project  {
      background: var(--projects-color);
    }
    &.tweetstorm  {
      background: var(--twitter-color);
    }
  }

  &.current, &.hovered {
    font-weight: 500;
    color: var(--text-color);
    @include daynight;
    .category__color {
      opacity: 1;
      @include daynight;
    }
  }
}
</style>