<template>
  <div class="posts">
    <div
      v-for="(post, index) in posts"
      :key="index">
      <PostItem :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
</style>
