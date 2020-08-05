<template>
  <div class="post">
    <nuxt-link
      class="post-link"
      :to="post.path">
      {{ post.title }}
    </nuxt-link>
    <div class="meta">
      <span class="post-subtitle">{{ $moment(post.createdAt).format('DD.MM.YY') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    cropExcerpt(excerpt) {
      if (excerpt.length > 128) { return `${excerpt.substring(0, 128)}...` }
      return excerpt
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  padding: 20px 36px;
  &:first-child { margin-top: 8px; }
  &:last-child { margin-bottom: 8px; }
}
.post-link {
  display: inline-block;
  position: relative;
  color: var(--text-color);
  font-weight: 550;
  line-height: 24px;
  font-size: 17px;
  cursor: pointer;
  transition: all .3s ease;
  text-decoration: underline;
  text-decoration-color: transparent;
  @include daynight;
  &:active, &:hover, &:focus {
    outline: none;
    box-shadow: none;
    border: none;
    text-decoration-color: var(--accent-color-4);
  }
}
.post-content {
  padding-bottom: 0;
  margin: 0;
  font-size: clamp(14px, 2.5vw, 15px);
  line-height: 1.4;
  color: var(--neutral-color);
  @include daynight;
}
.meta {
  margin: 0;
  padding: 0;
  line-height: 6px;
  font-weight: 400;
  font-size: 14px;
  margin-top: 8px;
  opacity: .7;
  @include daynight;
}
</style>
