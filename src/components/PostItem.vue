<template>
  <div class="article">
    <h1 class="title">{{ post.title }}</h1>
    <div class="article-body" v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: ['post']
}
</script>

<style lang="scss" scoped>
.title {
  padding: 28px 44px;
  @media (max-width: 767px) {
    padding: 20px 28px;
  }
}
</style>