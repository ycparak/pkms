<template>
  <NuxtLink :to="post.path" class="post-item">
    <div class="item-box">
      <span class="date post-date">{{ date }}</span>
      <span class="title">{{ post.title }}</span>
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

<style lang="scss">
.post-item {
  display: block;
  transition: all .3s ease-in-out;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  padding: 0 28px;
  border-bottom: 1px solid var(--line);
}
.item-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 68px;
  transition: all .3s ease-in-out;
  .post-date {
    margin-right: 28px;
  }
  .title {
    font-weight: 500;
    color: var(--text);
    transition: all .3s ease-in-out;
  }
}
</style>
