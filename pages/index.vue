<template>
  <div class="index">
    <Intro />
    <Posts :posts="posts" />
  </div>
</template>

<script>
export default {
  name: 'Index',
  async asyncData({ $content }) {
    const posts = await $content().fetch();
    return { posts };
  }
}
</script>

<style lang="scss" scoped>
</style>
