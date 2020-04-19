<template>
  <g-link :class="`post ${post.collection}`" :to="post.path">
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
  props: ['post', 'collection'],
}
</script>

<style lang="scss" scoped>
.post {
  display: block;
  flex: none;
  margin: 4px;
  min-height: 320px;
  width: calc(50% - 8px);
  background: var(--accent-color);
  &:nth-child(odd) {
    transform: translateY(-32px);
  }
}
.post__container {
  padding: 20px;
}
.post__title {
  font-weight: 400;
  font-size: 24px;
  display: block;
}
</style>