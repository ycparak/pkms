<template>
  <div class="wrapper">
  </div>
</template>

<script>
import getPosts from '@/composables/getPosts';
// import PostList from '@/components/PostList.vue';
// import LoadingSpinner from '../components/LoadingSpinner.vue';

export default {
  name: 'Home',
  // components: { PostList, LoadingSpinner },
  setup() {
    const { posts, error, load } = getPosts();
    load();

    return { posts, error };
  },
};
</script>

<style lang="scss" scoped>
</style>
