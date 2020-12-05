<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="post" class="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
    <LoadingSpinner v-else />
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import getPost from '@/composables/getPost';

export default {
  name: 'Post',
  components: { LoadingSpinner },
  props: ['id'],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();

    return { post, error, load };
  },
};
</script>

<style>

</style>
