<template>
  <a :href="post.slug" class="post-item">
    <TheContainer>
      <div class="item-box">
        <span class="date">{{ date }}</span>
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
  border-bottom: 1px solid var(--line);
  transition: all .3s ease;
  &:hover {
    box-shadow: 0 0px 12px 1px rgba(0, 0, 0, 0.05);
  }
}
.item-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 60px;
  .date {
    color: var(--subtle-text);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'IBM Plex Mono', monospace;
    margin-right: 24px;
  }
  .title {
    font-weight: 500;
    color: var(--text);
  }
}
</style>
