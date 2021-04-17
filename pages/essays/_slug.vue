<template>
  <article>
    <nuxt-content :document="essay" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const essay = await $content('essays', params.slug).fetch()
    return { essay }
  },
}
</script>

<style lang="scss">
</style>
