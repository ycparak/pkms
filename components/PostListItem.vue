<template>
  <div class="post">
    <nuxt-link
      class="post-link"
      :to="post.path">
      <div class="meta">
        <span class="subtitle post-subtitle">{{ $moment(post.date).format('MMM YYYY') }}</span>
      </div>
      <div
        v-if="!post.quote"
        class="post__body">
        <h5 class="post__title">
          {{ post.title }}
        </h5>
        <p
          v-if="post.excerpt"
          class="post__content">
          {{ cropExcerpt(post.excerpt) }}
        </p>
      </div>
      <div v-else-if="post.quote" class="post__body">
        <blockquote class="post__quote">
          <span class="post__quote--content">{{ post.quote }}</span>
        </blockquote>
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
      if (excerpt.length > 115) { return `${excerpt.substring(0, 115)}...` }
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
  padding: 32px 44px;
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
.post__body {
  .post__title {
    font-size: 17px;
    font-weight: 500;
    margin: 0;
    @include daynight;
  }
  .post__content {
    padding-bottom: 0;
    margin: 0;
    margin-top: 1px;
    opacity: .6;
    font-size: 16px;
    line-height: 24px;
    @include daynight;
  }
  .post__quote {
    font-family: freight-text-pro, serif;
    margin: 0;
    font-size: 17px;
    line-height: 24px;
    font-style: italic;
    padding-bottom: 4px;
    font-weight: 400;
    @include daynight;
    .post__quote--content {
      opacity: .7;
    }
  }
}
.meta {
  margin: 0;
  padding: 0;
  line-height: 10px;
  margin-bottom: 8px;
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
