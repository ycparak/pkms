<template>
  <g-link
    :class="`post ${post.collection.toLowerCase()}`" :to="post.path"
    @mouseover.native="mouseoverArticle(post.collection)"
    @mouseleave.native="mouseleaveArticle()"
    :style="{ 'z-index': lastIndex }">
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
  display: grid;
  align-items: end;
  min-height: 320px;
  width: 280px;
  background: var(--accent-color);
  border-radius: 12px;
  transform: rotateX(45deg) rotateY(-15deg) rotate(45deg);
  transition: all 0.4s ease;
  overflow: hidden;
  cursor: pointer;
  // background-image: linear-gradient(135deg, #bd7be8, #8063e1);
  background-image: linear-gradient(135deg, var(--accent-color), var(--accent-color-3));
  box-shadow: 20px 20px 60px rgba(34,50,84,0.5), 1px 1px 0px 1px #8063e1;
  color: var(--text-color);
  margin: -200px auto 0 auto;

  &:first-child { margin-top: 0 }

  &::after {
    position: absolute;
    top: -70px;
    left: 0;
    content: '';
    width: 200%;
    height: 200%;
    background-image: linear-gradient(60deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.1), rgba(255,255,255,0) 80%);
    transform: translateX(-100%);
  }

  &:hover {
    width: 460px;
    transform: rotateX(45deg) rotateY(-15deg) rotate(45deg) translate(60px, 0);
    &::after {
      transform: translateX(100%);
      transition: all 1.2s ease-in-out;
    }
  }
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