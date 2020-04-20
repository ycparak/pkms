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
  display: grid;
  align-items: end;
  min-height: 320px;
  width: calc(50% - 8px);
  margin: 4px;
  background: var(--accent-color);
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-color);
}
.post__title {
  font-weight: 500;
  font-size: 22px;
  display: block;
  align-self: end;
  justify-self: end;
  width: 280px;
  padding: 20px;
}
</style>