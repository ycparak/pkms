<template>
  <post :post="post">
    <nuxt-content :document="post" />
  </post>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('projects', params.slug).fetch()
    return { post }
  },
}
</script>

<style lang="scss">
</style>
