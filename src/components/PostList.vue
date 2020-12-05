<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <PostListItem :post="post" />
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/PostListItem.vue';

export default {
  name: 'PostList',
  components: { PostListItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup() {
  },
};
</script>

<style>

</style>
