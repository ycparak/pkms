<template>
  <div>
    <div class="post__meta">
      <span class="subtitle">{{ post.collection }}</span>
      <template v-if="activelySelected === 'active'">
        <span class="subtitle">&middot;</span>
        <span class="subtitle">{{ post.date }}</span>
        <span class="subtitle">&middot;</span>
        <span class="subtitle">{{ post.timeToRead }} min read</span>
      </template>
    </div>
    <div
      class="post__body">
      <h5 class="post__title">
        {{ post.title }}
      </h5>
      <p
        v-if="post.excerpt"
        class="post__excerpt">
        {{ getExcerpt(post.excerpt) }} />
      <p 
        v-else-if="post.note"
        class="post__note">
        {{ post.note }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostListItemCard',
  props: [
    'post',
    'collection',
    'isActive',
    'activelySelected',
  ],
  methods: {
    getExcerpt(excerpt) {
      if (excerpt.length > 140) return `${excerpt.substring(0, 140)}...`;
      return excerpt;
    }
  }
}
</script>

<style lang="scss" scoped>
.post__body {
  .post__title {
    font-size: 17px;
    font-weight: 500;
    margin: 0;
    @include daynight;
  }
  .post__excerpt {
    padding-bottom: 0;
    margin: 0;
    margin-top: 1px;
    opacity: .6;
    font-size: 16px;
    line-height: 24px;
    @include daynight;
  }
  .post__note {
    font-family: professor;
    font-size: 22px;
    margin: 0;
    margin-top: 6px;
    opacity: .6;
  }
}
.post__meta {
  margin: 0;
  padding: 0;
  line-height: 10px;
  margin-bottom: 8px;
  @include daynight;
  .subtitle {
    vertical-align: top;
    opacity: .3;
    font-size: 10px;
    margin: 0 2px;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    &:first-child { margin-left: 0; }
    &:first-child { margin-right: 0; }
  }
}
</style>