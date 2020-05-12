<template>
  <div class="post">
    <g-link
      class="post__link"
      :class="{
        essay: post.collection.toLowerCase() === 'essay',
        active: isActive,
      }" 
      :to="post.path"
      @mouseover.native.stop.prevent="mouseoverArticle(post)"
      @mouseleave.native.stop.prevent="mouseleaveArticle()">
      <div class="post__meta">
        <span class="subtitle">{{ post.collection }}</span>
        <template v-if="activelySelected === 'active'">
          <span class="subtitle">&middot;</span>
          <span class="subtitle">{{ post.date }}</span>
          <template v-if="!post.quote">
            <span class="subtitle">&middot;</span>
            <span class="subtitle">{{ post.timeToRead }} min read</span>
          </template>
        </template>
      </div>
      <div
        v-if="!post.quote"
        class="post__body">
        <h5 class="post__title">
          {{ post.title }}
        </h5>
        <p
          v-if="post.excerpt"
          class="post__content">
          {{ getExcerpt(post.excerpt) }}
        </p>
      </div>
      <div v-else-if="post.quote" class="post__body">
        <blockquote 
          class="post__quote"
          :class="{ active: activelySelected === 'active' }">
          <span class="post__quote--content">{{ post.quote }}</span>
        </blockquote>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: [
    'post',
    'collection',
    'collectionNext',
    'hoveredPost',
    'setNextCollection',
    'setHoveredPost',
    'revertCollection'
  ],
  computed: {
    isActive() {
      if (this.collection === this.collectionNext || this.collectionNext === 'all') {
        return true;
      }
      else if (this.hoveredPost && this.hoveredPost.id === this.post.id) {
        return true;
      }
      else if (this.hoveredPost && this.collectionNext === this.post.collection.toLowerCase()) {
        return false;
      }
      else if (this.hoveredPost === null && this.collectionNext === this.post.collection.toLowerCase()) {
        return true;
      }
      return false;
    },
    activelySelected() {
      if (this.isActive && this.collection !== this.collectionNext && this.collectionNext !== 'all') return 'active';
      return ''
    },
  },
  methods: {
    mouseoverArticle(post) {
      this.setNextCollection(post.collection.toLowerCase())
      this.setHoveredPost(post)
    },
    mouseleaveArticle() {
      this.revertCollection();
      this.setHoveredPost(null)
    },
    getExcerpt(excerpt) {
      if (excerpt.length > 140) return `${excerpt.substring(0, 140)}...`;
      return excerpt;
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  border-bottom: 1px solid var(--accent-color);
  @include daynight;
}

.post__link {
  display: block;
  position: relative;
  color: var(--text-color);
  border-radius: 2px;
  padding: 20px 40px;
  cursor: pointer;

  &.active { opacity: 1; }
  &:not(.active) { opacity: .2 }

  &:active, &:hover, &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
}
.post__body {
  .post__title {
    font-size: 17px;
    font-weight: 500;
    margin: 0;
    @include daynight;
  }
  .post__content {
    padding-bottom: 0;
    margin: 0;
    margin-top: 1px;
    opacity: .6;
    font-size: 16px;
    line-height: 24px;
    @include daynight;
  }
  .post__quote {
    font-family: freight-text-pro, serif;
    margin: 0;
    font-size: 17px;
    line-height: 24px;
    font-style: italic;
    padding-left: 12px;
    border-left: 4px solid var(--accent-color);
    margin-left: -16px;
    padding-bottom: 4px;
    font-weight: 400;
    @include daynight;
    .post__quote--content {
      opacity: .7;
    }
    &.active {
      border-left-color: var(--text-color);
    }
  }
}
.post__meta {
  margin: 0;
  padding: 0;
  line-height: 10px;
  margin-bottom: 8px;
  @include daynight;
  .subtitle {
    vertical-align: top;
    opacity: .3;
    font-size: 10px;
    margin: 0 2px;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    &:first-child { margin-left: 0; }
    &:first-child { margin-right: 0; }
  }
}
</style>