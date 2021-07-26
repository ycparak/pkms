<template>
  <post :post="post">
    <nuxt-content :document="post" />
  </post>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('thoughts', params.slug).fetch()
    return { post }
  },
}
</script>

<style lang="scss">
</style>
