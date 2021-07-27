<template>
  <div class="posts">
    <Grid>
      <h1>{{ title }}</h1>
    </Grid>
    <div
      v-for="(post, index) in posts"
      :key="index">
      <PostsThing :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    title: {
      type: String,
      required: false,
      default: 'Posts.'
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.posts {
  margin-top: 40px;
}
h1 {
  margin-bottom: 8px;
}
</style>
