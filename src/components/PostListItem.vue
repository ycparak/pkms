<template>
  <g-link
    :class="`post ${post.collection.toLowerCase()}`" :to="post.path"
    @mouseover.native="mouseoverArticle(post.collection)"
    @mouseleave.native="mouseleaveArticle()">
    <article :class="`post__container ${post.collection}`">
      <div class="post__title">
        <h5>{{ post.title }}</h5>
      </div>
    </article>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  position: relative;
  display: block;
  min-height: 240px;
  width: calc(100% - 8px);
  margin: 4px;
  min-width: 230px;
  background: var(--accent-color);
  color: var(--text-color);
  border-radius: 8px;
  cursor: pointer;
  &.essay{
    grid-column: span 2;
  }

  &:hover {
    transform: scale(1.1);
    z-index: 120;
  }

  @media (max-width: 1360px) {
    margin: 4px auto;
  }
}

.post__container {
  display: grid;
  height: 100%;
  width: 100%;
  align-items: end;
  padding: 20px;
}
.post__title {
  font-weight: 500;
  font-size: 21px;
}
</style>