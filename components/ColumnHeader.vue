<template>
  <div
    class="header"
    :class="{ dark : $colorMode.value === 'dark' }">
    <ColumnCloseButton
      v-if="column.depth !== 0"
      :index="index"
      :column="column" />
    <div
      class="header-content"
      :class="{ push : column.depth === 0 }">
      <span v-if="getDate" class="subtitle post-subtitle">{{ getDate }}</span>
      <span v-if="getDate" class="subtitle post-subtitle muted">&middot;</span>
      <span class="subtitle post-subtitle muted">{{ column.header }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnHeader',
  props: {
    index: {
      type: Number,
      required: true
    },
    column: {
      type: Object,
      required: false,
      default: null
    },
    post: {
      type: Object,
      required: false,
      default: null
    }
  },
  computed: {
    getDate() {
      if (this.column.post && this.column.post.updatedAt) {
        return this.$moment(this.column.post.updatedAt).format('DD.MM.YYYY')
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid var(--line-color);
  padding: 6px 13px;
  z-index: 600;
  box-shadow: var(--column-top-shadow)
}

.post-subtitle {
  vertical-align: top;
  padding: 0;
  line-height: 39px;
  &:first-child { margin-left: 0; }
  &:first-child { margin-right: 0; }
  &.muted { color: var(--neutral-color); }
}

.header-content {
  position: relative;
 &.push {
    position: relative;
    left: 24px;
    @media (max-width: 767px) {
      left: 16px;
    }
  }
}
</style>
