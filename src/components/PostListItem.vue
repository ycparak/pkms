<template>
  <g-link
    class="post"
    :class="{
      essay: post.collection.toLowerCase() === 'essay',
      active: isActive,
    }" 
    :to="post.path"
    @mouseover.native.stop.prevent="mouseoverArticle(post)"
    @mouseleave.native.stop.prevent="mouseleaveArticle()">
    <div class="post__meta">
      <span :class="`subtitle subtitle__${post.collection.toLowerCase()}`">
        {{ post.collection }}
      </span>
      <span :class="`subtitle__humanized subtitle__${post.collection.toLowerCase()}`">
        {{ post.timeToRead }} min read
      </span>
    </div>
    <div class="post__body">
      <h5 class="post__title">{{ post.title }}</h5>
      <p
        v-if="post.collection.toLowerCase() === 'essay'"
        class="post__excerpt">
        {{ post.excerpt }}
      </p>
    </div>
    <div class="post__footer">
      <span :class="`subtitle__humanized subtitle__${post.collection.toLowerCase()}`">
        {{ post.date }}
      </span>
    </div>
  </g-link>
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
    }
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
  }
}
</script>

<style lang="scss" scoped>
.post {
  display: grid;
  position: relative;
  min-height: 240px;
  width: calc(100% - 8px);
  min-width: 230px;
  margin: 4px;
  padding: 20px;
  background: var(--accent-color);
  color: var(--text-color);
  border-radius: 2px;
  cursor: pointer;

  &.essay  {
    grid-column: span 2;
    .post__body {
      padding: 20px 0;
    }
  }

  &.active {
    opacity: 1;
    z-index: 11;
  }
  &:not(.active) { opacity: .3 }

  @media (max-width: 1360px) {
    margin: 8px auto;
    width: 100%;
    min-width: 100%;
  }
}

.post__meta {
  .subtitle {
    display: block;
    width: 100%;
  }
}

.post__body {
  .post__title {
    font-weight: 500;
    font-size: 21px;
    line-height: 28px;
    margin-bottom: 0;
  }
  .post__excerpt {
    padding-bottom: 0;
    margin-bottom: 0;
    opacity: .5;
    margin: 5px 0;
    font-size: 15px;
    line-height: 22px;
  }
}

.post__footer {
  align-self: end;
}

.subtitle__humanized {
  color: var(text-color);
  opacity: .5;
}
</style>