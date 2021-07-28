<template>
  <div class="index">
    <Posts title="Essays." :posts="posts" />
  </div>
</template>

<script>
export default {
  name: 'Essays',
  async asyncData({ $content }) {
    const posts = await $content().where({ category: 'Essay' }).sortBy('updatedAt', 'desc').fetch();
    return { posts };
  }
}
</script>

<style lang="scss" scoped>
</style>
