<template>
  <div class="post">
    <nuxt-link
      class="post-link"
      :to="post.path">
      <div class="meta">
        <span class="subtitle post-subtitle">{{ $moment(post.date).format('MMM YYYY') }}</span>
        <span class="subtitle post-subtitle">&middot;</span>
        <span class="subtitle post-subtitle">{{ post.readingTime }}</span>
      </div>
      <div
        class="post-body">
        <h5 class="post-item-title">
          {{ post.title }}
        </h5>
        <p
          v-if="post.excerpt"
          class="post-content">
          {{ cropExcerpt(post.excerpt) }}
        </p>
        <p
          v-else-if="post.quote"
          class="post-content">
          {{ cropExcerpt(post.quote) }}
        </p>
      </div>
    </nuxt-link>
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
  scroll-snap-align: start;
  border-bottom: 1px solid var(--accent-color);
  @include daynight;
}

.post-link {
  display: block;
  position: relative;
  color: var(--text-color);
  border-radius: 2px;
  padding: 28px 36px;
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 24px;
  }

  &:active, &:hover, &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  &:hover {
    background: var(--accent-color);
  }
}
.post-item-title {
  font-weight: 500;
  margin: 8px 0 4px 0;
  @include daynight;
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
  @include daynight;
  .post-subtitle {
    vertical-align: top;
    opacity: .3;
    margin: 0 2px;
    padding: 0;
    &:first-child { margin-left: 0; }
    &:first-child { margin-right: 0; }
  }
}
</style>
