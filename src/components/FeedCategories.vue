<template>
  <div class="categories">
    <div class="categories__container">
      <div
        class="category"
        :class="{ active: collection === 'all' || collectionNext === 'all' }"
        @mouseover="mouseoverCollection('all')"
        @mouseleave="mouseleaveCollection('all')"
        @click="setCollection('all')">
        <span class="category__text all">All</span>
        <span class="category__color all"></span>
      </div>
      <div
        class="category"
        :class="{ active: collection === 'essay' || collectionNext === 'essay' }"
        @mouseover="mouseoverCollection('essay')"
        @mouseleave="mouseleaveCollection('essay')"
        @click="setCollection('essay')">
        <span class="category__text essay">Essays</span>
        <span class="category__color essay"></span>
      </div>
      <div
        class="category"
        :class="{ active: collection === 'tweetstorm' || collectionNext === 'tweetstorm' }"
        @mouseover="mouseoverCollection('tweetstorm')"
        @mouseleave="mouseleaveCollection('tweetstorm')"
        @click="setCollection('tweetstorm')">
        <span class="category__text tweetstorm">Tweetstorms</span>
        <span class="category__color tweetstorm"></span>
      </div>
      <div
        class="category"
        :class="{ active: collection === 'project' || collectionNext === 'project' }"
        @mouseover="mouseoverCollection('project')"
        @mouseleave="mouseleaveCollection('project')"
        @click="setCollection('project')">
        <span class="category__text project">Projects</span>
        <span class="category__color project"></span>
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
    bottom: 24px;
    left: 24px;
  }
  @media (max-width: 676px) {
    bottom: 20px;
    left: 20px;
  }
  @media (max-width: 576px) {
    bottom: 12px;
    left: 12px;
  }
}

.categories__container {
  pointer-events: visible;
}

.category {
  display: inline-block;
  font-size: 15px;
  line-height: 15px;
  margin: 0 16px;
  padding: 0;
  color: var(--accent-color-3);
  font-weight: 500;
  cursor: pointer;
  @include daynight;
  &:first-child { margin-left: 0 }
  &:last-child { margin-right: 0 }

  .category__text {
    display: block;
  }

  .category__color {
    display: block;
    width: 8px;
    height: 8px;
    margin: 8px auto 0 auto;
    background: var(--text-color);
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

  &:hover, &.active {
    font-weight: 500;
    color: var(--text-color);
    .category__color {
      opacity: 1;
      @include daynight;
    }
  }
}
</style>