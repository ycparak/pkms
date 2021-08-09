<template>
  <div class="update-item complete">
    <div class="update-marker"></div>
    <div class="update-content">
      <div class="update-content-header">
        <div :id="`update-${post.week}`" class="update-title">
          Week {{ post.week }}: {{ post.title }}
        </div>
        <div class="tenk-var update-subtitle">
          {{ date }} &middot; ${{ post.mrr }} MRR &middot;
          {{ post.savingsLeft }} days of savings left
        </div>
      </div>
      <div class="update-content-post">
        <nuxt-content :document="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Updates',
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
.update-item {
  display: flex;
  flex-direction: row;
  margin-left: -9px;
  padding: var(--margin);
  padding-left: 0;
  position: relative;
  &:last-child {
    padding-bottom: 4px;
  }
}
.update-marker {
  margin-right: calc(var(--margin) - 9px);
  border: 1px solid var(--line);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  transition: all 0.1s ease-in-out;
  background: var(--text);
  color: var(--background);
  position: relative;
  top: 1px;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
}

.update-content {
  width: 100%;
}
.update-content-header {
  margin-bottom: 20px;
  .update-title {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 2px;
  }
  .update-subtitle {
    font-size: 12px;
  }
}
</style>
