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
  width: calc(50% - 16px);
  min-width: 230px;
  margin: 4px;
  background: var(--accent-color);
  color: var(--text-color);
  border-radius: 2px;
  cursor: pointer;

  &:nth-child(even) {
    top: 120px;
  }

  &:hover {
    transform: scale(1.1);
    opacity: 1 !important;
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