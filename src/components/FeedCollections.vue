<template>
  <div class="collections">
    <div class="collections__container">
      <div
        class="collection"
        :class="{ 
          current: collection === 'all' && (collectionNext === null || collectionNext === 'all'),
          hovered: collectionNext === 'all' && collection !== 'all',
        }"
        @mouseover="mouseoverCollection('all')"
        @mouseleave="mouseleaveCollection('all')"
        @click="setCollection('all')">
        <span class="collection__color all"></span>
        <span class="collection__text all">All</span>
      </div>
      <div
        class="collection"
        :class="{ 
          current: collection === 'essay' && (collectionNext === null || collectionNext === 'essay'),
          hovered: collectionNext === 'essay' && collection !== 'essay',
        }"
        @mouseover="mouseoverCollection('essay')"
        @mouseleave="mouseleaveCollection('essay')"
        @click="setCollection('essay')">
        <span class="collection__color essay"></span>
        <span class="collection__text essay">Essays</span>
      </div>
      <div
        class="collection"
        :class="{ 
          current: collection === 'tweetstorm' && (collectionNext === null || collectionNext === 'tweetstorm'),
          hovered: collectionNext === 'tweetstorm' && collection !== 'tweetstorm',
        }"
        @mouseover="mouseoverCollection('tweetstorm')"
        @mouseleave="mouseleaveCollection('tweetstorm')"
        @click="setCollection('tweetstorm')">
        <span class="collection__color tweetstorm"></span>
        <span class="collection__text tweetstorm">Tweetstorms</span>
      </div>
      <div
        class="collection"
        :class="{ 
          current: collection === 'project' && (collectionNext === null || collectionNext === 'project'),
          hovered: collectionNext === 'project' && collection !== 'project',
        }"
        @mouseover="mouseoverCollection('project')"
        @mouseleave="mouseleaveCollection('project')"
        @click="setCollection('project')">
        <span class="collection__color project"></span>
        <span class="collection__text project">Projects</span>
      </div>
      <div
        class="collection"
        :class="{ 
          current: collection === 'note' && (collectionNext === null || collectionNext === 'note'),
          hovered: collectionNext === 'note' && collection !== 'note',
        }"
        @mouseover="mouseoverCollection('note')"
        @mouseleave="mouseleaveCollection('note')"
        @click="setCollection('note')">
        <span class="collection__color note"></span>
        <span class="collection__text note">Notes</span>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon, TwitterIcon } from 'vue-feather-icons';

export default {
  name: 'Feedcollections',
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
.collections {
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

.collections__container {
  pointer-events: visible;
  text-align: left;
  position: relative;
}

.collection {
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

  .collection__text {
    display: inline-block;
  }

  .collection__color {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-right: 8px;
    background: var(--accent-color-2);
    text-align: center;
    border-radius: 50%;
    position: relative;
    top: -2px;
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
    &.note  {
      background: var(--notes-color);
    }
  }

  &.current, &.hovered {
    font-weight: 500;
    color: var(--text-color);
    @include daynight;
    .collection__color {
      opacity: 1;
      @include daynight;
    }
  }
}
</style>