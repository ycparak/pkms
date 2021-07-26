<template>
  <div class="post">
    <Grid>
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="date">{{ date }}</div>
      <div v-if="post.locked" class="post-locked">
        This post is only available to editors for now. It should be up shortly (within a week).
      </div>
    </Grid>
    <slot v-if="!post.locked"></slot>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return this.$moment(this.post.createdAt).format('DD MMMM YYYY')
    },
  },
}
</script>

<style lang="scss" scoped>
.post {
  margin-top: 40px;
}
.date {
  color: var(--subtle-text);
  font-family: 'Space Mono', menlo, monospace;
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 12px;
}
.post-locked {
  grid-column: 2 / 4;
  padding: var(--margin);
  border: 1px solid var(--line);
  background: var(--background-alt);
  text-align: center;
  border-radius: 8px;
  margin-top: var(--margin);
  line-height: 1.6;
  font-size: 14px;
}
</style>
