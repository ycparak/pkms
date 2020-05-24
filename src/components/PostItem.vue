<template>
  <div class="post">
    <h1 class="title">{{ post.title }}</h1>
    <div class="content" v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: ['post']
}
</script>

<style lang="scss" scoped>
.post {
  padding: 28px 44px;
}
</style>