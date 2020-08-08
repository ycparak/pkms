<template>
  <div class="post">
    <a
      :href="`/${getLink}`"
      class="post-link"
      :class="`${classnames}`"
      @click.prevent="handleInterlink()">
      {{ post.title }}
    </a>
    <div class="meta">
      <span class="post-subtitle">{{ $moment(post.createdAt).format('DD.MM.YY') }}</span>
    </div>
  </div>
</template>

<script>
import interLinks from '@/mixins/interLinks'

export default {
  name: 'Link',
  mixins: [interLinks],
  props: {
    href: {
      type: String,
      required: false,
      default: ''
    },
    spaceBefore: {
      type: String,
      required: false,
      default: 'true'
    },
    includedPost: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  padding: 16px 0;
  &:first-child { padding-top: 0; }
  &:last-child { padding-bottom: 0; }
}
.post-link {
  display: inline-block;
  position: relative;
  color: var(--text-color);
  font-weight: 449;
  line-height: 24px;
  font-size: 16px;
  cursor: pointer;
  transition: all .3s ease;
  text-decoration: underline;
  text-decoration-color: transparent !important;
  @include daynight;
  &:active, &:hover, &:focus {
    outline: none;
    box-shadow: none;
    border: none;
    text-decoration-color: var(--accent-color-4) !important;
  }
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
