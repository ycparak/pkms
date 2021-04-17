<template>
  <div class="grid">
    <Profile />
    <Posts :posts="posts" />
  </div>
</template>

<script>
export default {
  name: 'IndexHome',
  async asyncData({ $content, params }) {
    const essays = await $content('essays')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const projects = await $content('projects')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const tenKMRR = await $content('10kmrr')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const posts = { ...essays, ...projects, ...tenKMRR }
    return { posts, essays, projects, tenKMRR }
  },
}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: minmax(576px, 1fr) 2.5fr;
  @media (max-width: 768px) {
    display: block;
  }
}
</style>
