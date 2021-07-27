<template>
  <div class="index">
    <Posts title="Notes." :posts="posts" />
  </div>
</template>

<script>
export default {
  name: 'Notes',
  async asyncData({ $content }) {
    const posts = await $content().where({ category: 'Note' }).fetch();
    return { posts };
  }
}
</script>

<style lang="scss" scoped>
</style>
