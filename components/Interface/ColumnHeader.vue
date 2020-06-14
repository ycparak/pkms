<template>
  <div class="header">
    <ColumnCloseButton :index="index" :column="column" />
    <div class="header-content">
      <template v-if="column.depth !== 2">
        <span class="subtitle post-subtitle">{{ column.header }}</span>
      </template>
      <template v-else>
        <span class="subtitle post-subtitle">{{ $moment(column.post.date).format('DD MMM YYYY') }}</span>
        <span class="subtitle post-subtitle muted">&middot;</span>
        <span v-if="column.header" class="subtitle post-subtitle muted">{{ column.header }}</span>
      </template>
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
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid var(--accent-color);
  padding: 6px 13px;
  z-index: 600;
  box-shadow: 0 12px 20px 0 var(--background-color);
  @include daynight;
}

.post-subtitle {
  vertical-align: top;
  padding: 0;
  line-height: 39px;
  &:first-child { margin-left: 0; }
  &:first-child { margin-right: 0; }
  &.muted { color: var(--neutral-color); }
}
</style>
