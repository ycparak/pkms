<template>
  <g-link
    :class="`post ${post.collection.toLowerCase()}`" :to="post.path"
    @mouseover.native="mouseoverArticle(post.collection)"
    @mouseleave.native="mouseleaveArticle()">
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
  props: ['post', 'lastIndex', 'collection', 'setCollection', 'setNextCollection', 'revertCollection'],
  methods: {
    mouseoverArticle(collection) {
      this.setNextCollection(collection.toLowerCase())
    },
    mouseleaveArticle() {
      this.revertCollection();
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
  z-index: 11;

  &.essay{
    grid-column: span 2;
    .post__body {
      padding: 20px 0;
    }
  }

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