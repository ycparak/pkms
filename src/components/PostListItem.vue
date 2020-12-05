<template>
  <router-link :to="{ name: 'Post', params: { id: post.id }}" class="post-item">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </router-link>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'SinglePost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const snippet = computed(() => `${props.post.body.substring(0, 10000)}...`);
    return { snippet };
  },
};
</script>

<style lang="scss" scoped>
.post-item {
  display: block;
  margin: 20px;
  text-decoration: none;
  color: inherit;
}
</style>
