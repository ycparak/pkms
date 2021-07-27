<template>
  <div class="post-item">
    <Grid>
      <span v-if="post.locked" class="lock">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </span>
      <div class="post-item-content">
        <span class="date">{{ date }}</span>
        <NuxtLink :to="post.path" class="title">{{ post.title }}</NuxtLink>
      </div>
    </Grid>
  </div>
</template>

<script>
export default {
  name: 'PostsThing',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return this.$moment(this.post.createdAt).format('MMM YYYY')
    },
  },
}
</script>

<style lang="scss" scoped>
.post-item {
  display: block;
  transition: all .1s ease-in-out;
  text-decoration: none;
  line-height: 26px;
  border-bottom: none;
  &:hover { border-bottom: none; }
}
.post-item-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.date {
  color: var(--subtle-text);
  font-family: 'Space Mono', menlo, monospace;
  font-size: 14px;
  text-transform: uppercase;
  vertical-align: top;
  grid-column: 3;
  margin-right: 12px;
  // background: blue;
  min-width: 69px;
  position: relative;
  top: -1px;
}
.title {
  font-weight: 400;
  color: var(--text);
  transition: all .1s ease-in-out;
  line-height: 1.4;
  text-decoration: underline;
  grid-column: 3;
  &:hover {
    color: var(--subtle-text);
  }
}
.lock {
  grid-column: 2;
  @media (max-width: 700px) {
    display: none;
  }
  svg {
    width: 13px;
    fill: none;
    stroke: var(--subtle-text);
    position: relative;
    top: 1px;
    transition: all .1s ease-in-out;
  }
}
</style>
