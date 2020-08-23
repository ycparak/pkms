<template>
  <div
    v-show="!loading"
    :id="`column-${index}`"
    :class="`column ${isMultipleColumns}`"
    :style="{ left: `${index * 36}px` }">
    <ColumnHeader :index="index" :column="column" :post="post" />
    <!-- Left sticky label -->
    <a
      v-if="columnScrolledOver"
      v-scroll-to="{
        el: `#column-${index}`,
        container: '#grid',
        duration: 500,
        easing: 'linear',
        offset: getLeftScrollOffset,
        force: true,
        cancelable: true,
        x: true,
        y: false
      }"
      :href="`#column-${index}`"
      class="sticky-label-left">
      <div class="label">
        {{ column.title }}
      </div>
    </a>

    <!-- Right sticky label -->
    <div
      v-else-if="!columnInView"
      class="sticky-label-right"
      :style="{ right: calcRightStickyLabelPos }">
      <div class="header">
        <ColumnCloseButton :index="index" :column="column" />
      </div>
      <a
        v-scroll-to="{
          el: `#column-${index}`,
          container: '#grid',
          duration: 500,
          easing: 'linear',
          offset: getRightScrollOffset,
          force: true,
          cancelable: true,
          x: true,
          y: false
        }"
        class="label"
        :href="`#column-${index}`">
        {{ column.title }}
      </a>
    </div>

    <!-- Column content -->
    <div v-else class="section">
      <PostItem :post="column.post" />
    </div>
    <div class="column-footer" />
  </div>
</template>

<script>
export default {
  name: 'Column',
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
    columns: {
      type: Array,
      required: true
    },
    post: {
      type: Object,
      required: false,
      default: null
    },
    vw: {
      type: Number,
      required: true
    },
    x: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      dimensions: {
        colWidth: 560,
        margin: 28,
        gridStartPos: 136,
        labelSize: 36
      }
    }
  },
  computed: {
    loading() {
      return this.$store.getters['columns/isLoading']
    },
    isMultipleColumns() {
      if (this.columns.length > 1) {
        return 'multiple-columns'
      }
      return ''
    },
    columnScrolledOver() {
      const { index, gridVW, vw, x } = this
      const { colWidth, margin, gridStartPos, labelSize } = this.dimensions

      if (vw <= 767) { return false }

      const adjColEnd = (index + 1) * ((colWidth + margin) - labelSize)
      const scrollThreshold = adjColEnd - (labelSize)

      if (x > scrollThreshold) {
        return true
      }
      return false
    },
    columnInView() {
      const { index, vw, x, columns } = this
      const { colWidth, margin, gridStartPos, labelSize } = this.dimensions

      if (vw <= 767) { return true }

      const colStart = index * (colWidth + margin)
      const gridVW = vw - gridStartPos
      const nextNumHiddenCols = columns.length - index - 1
      const sizeOfNextCols = nextNumHiddenCols * labelSize

      if (colStart > (gridVW + x - sizeOfNextCols)) {
        return false
      }
      return true
    },
    calcRightStickyLabelPos() {
      const nextNumHiddenCols = this.columns.length - this.index - 1
      return `${(nextNumHiddenCols * 36) - 408}px`
    },
    getRightScrollOffset() {
      const { labelSize } = this.dimensions
      const totLabelWidth = ((this.index) * labelSize) * -2
      return totLabelWidth
    },
    getLeftScrollOffset() {
      const { colWidth, margin, labelSize } = this.dimensions
      return (this.columns.length - 1 - this.index) * (colWidth - labelSize - margin) * -1
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  display: block;
  border: 1px solid var(--line-color);
  border-radius: 12px;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: var(--background-color);
  &.multiple-columns {
    box-shadow: var(--column-shadow);
  }

  @media (max-width: 767px) {
    height: calc(100vh - 8vw - 60px);
    max-width: 80vw;
    min-width: 80vw;
    margin-right: 4vw;
    position: static;
    box-shadow: none;

    &:only-child {
      max-width: 92vw;
      min-width: 92vw;
    }
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 28px - 28px);
    max-width: 560px;
    min-width: 560px;
    margin-right: 28px;
  }

  &:last-child {
    margin-right: 20px;
  }
}

.label {
  writing-mode: vertical-lr;
  padding-top: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.1px;
}

.sticky-label-left {
  display: block;
  width: 32px;
  height: calc(100vh - 28px - 28px - 40px);
  border-bottom-left-radius: 12px;
  cursor: pointer;
  &:hover { background-color: var(--accent-color) }

  @media (max-width: 767px) {
    display: none;
  }
}

.sticky-label-right {
  position: fixed;
  top: 28px;
  right: 0;
  bottom: 0;
  height: calc(100vh - 28px - 26px);
  box-shadow: var(--column-shadow);
  background-color:  var(--background-color);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  width: 440px;
  border: 1px solid var(--line-color);
  border-right: none;
  z-index: 900;

  @media (max-width: 767px) {
    display: none;
  }

  .header {
    height: 40px;
    width: 100%;
    padding: 12px 13px;
    border-bottom: 1px solid var(--line-color);
  }

  .label {
    width: 100%;
    border-bottom-left-radius: 11px;
    background-color: var(--background-color);
    height: calc(100% - 40px);
    cursor: pointer;
    &:hover { background-color: var(--accent-color) }
  }
}

.column-footer {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 1px;
  padding: 12px 13px;
  z-index: 600;
  box-shadow: var(--column-bottom-shadow)
}
</style>
