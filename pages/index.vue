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
    const tenKMRR = await $content('10kmrr')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const projects = await $content('projects')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const essays = await $content('essays')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const thoughts = await $content('thoughts')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const posts = [...tenKMRR, ...projects, ...essays, ...thoughts]
    return { posts, essays, projects, tenKMRR }
  },
}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 576px 2.5fr;
  transition: all .3s ease-in-out;
  @media (max-width: 768px) {
    display: block;
  }
}
</style>
