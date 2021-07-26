<template>
  <NuxtLink :to="post.path" class="post-item">
    <div class="item-box">
      <div class="date">{{ date }}</div>
      <div class="title">{{ post.title }}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'PostItem',
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
  display: inline-block;
  transition: all .1s ease-in-out;
  text-decoration: none;
  line-height: 26px;
  border-bottom: none;
  &:hover { border-bottom: none; }
}
.item-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all .1s ease-in-out;
}
.date {
  width: 96px;
  color: var(--subtle-text);
  font-family: 'Space Mono', menlo, monospace;
  font-size: 14px;
  text-transform: uppercase;
}
.title {
  font-weight: 400;
  color: var(--text);
  transition: all .1s ease-in-out;
  line-height: 1.4;
  border-bottom: 1px solid var(--subtle-text);
}
.post-item:hover .title {
  border-bottom: 1px solid var(--text);
}
</style>
