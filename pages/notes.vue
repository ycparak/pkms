<template>
  <div class="index">
    <Posts title="Notes." :posts="posts" />
  </div>
</template>

<script>
export default {
  name: 'Notes',
  async asyncData({ $content }) {
    const posts = await $content().sortBy('updatedAt', 'desc').fetch();
    return { posts };
  }
}
</script>

<style lang="scss" scoped>
</style>
