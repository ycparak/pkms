<template>
  <Post :post="post">
    <nuxt-content :document="post" />
  </Post>
</template>

<script>
export default {
  name: 'Slug',
  async asyncData({ $content, params }) {
    const post = await $content('', params.slug).fetch()
    return { post }
  },
}
</script>

<style lang="scss" scoped>
</style>
