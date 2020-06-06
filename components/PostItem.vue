<template>
  <div class="article">
    <h1 class="title">
      {{ post.title }}
    </h1>
    <InterLink v-if="false" name="1" />
    <nuxt-content :document="post" />
  </div>
</template>

<script>
import InterLink from '@/components/Interface/InterLink'

export default {
  name: 'PostItem',
  components: {
    InterLink
  },
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
  padding: 28px 44px 16px 44px;
  @media (max-width: 767px) {
    padding: 20px 28px 12px 28px;
  }
}
</style>
