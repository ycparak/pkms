<template>
  <NuxtLink :to="post.path" class="post-item">
    <div class="item-box">
      <div class="date">{{ date }}</div>
      <div class="title">
        <span v-if="post.locked" class="lock">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </span>
        {{ post.title }}
      </div>
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
.lock > svg {
  width: 14px;
  fill: none;
  stroke: var(--text);
  position: relative;
  top: 1px;
}
</style>
