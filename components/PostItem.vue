<template>
  <client-only>
    <div class="article">
      <h1 class="title">
        {{ post.title }}
      </h1>
      <nuxt-content :document="post" />
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  padding: 28px 36px 16px 36px;
  @media (max-width: 767px) {
    padding: 20px 28px 12px 28px;
  }
}
</style>
