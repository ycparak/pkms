<template>
  <a :href="post.path" class="post-item">
    <TheContainer>
      <div class="item-box">
        <span class="date post-date">{{ date }}</span>
        <span class="title">{{ post.title }}</span>
      </div>
    </TheContainer>
  </a>
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
  position: relative;
  top: -1px;
  &:hover {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
}
.item-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 60px;
  transition: all .3s ease-in-out;
  .post-date {
    margin-right: 24px;
  }
  .title {
    font-weight: 500;
    color: var(--text);
    transition: all .3s ease-in-out;
  }
}
</style>
