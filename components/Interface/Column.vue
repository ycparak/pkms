<template>
  <div
    v-show="!loading"
    :id="`column-${index}`"
    class="column"
    :style="{ left: `${index * 36}px` }">
    <ColumnHeader :index="index" :column="column" :post="post" />
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
    <div v-else class="section">
      <Profile
        v-if="column.depth === 0" />
      <PostList
        v-else-if="column.depth === 1"
        :type="column.collection" />
      <PostItem
        v-else-if="column.depth === 2"
        :post="column.post" />
    </div>
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
    vw() {
      return this.$store.getters['columns/getViewportWidth']
    },
    xScrollPos() {
      return this.$store.getters['columns/getScrollPos']
    },
    columnScrolledOver() {
      const { index, gridVW, xScrollPos } = this
      const { colWidth, margin, gridStartPos, labelSize } = this.dimensions

      const adjColEnd = (index + 1) * ((colWidth + margin) - labelSize)
      const scrollThreshold = adjColEnd - (labelSize)

      if (xScrollPos > scrollThreshold) {
        return true
      }
      return false
    },
    columnInView() {
      const { index, vw, xScrollPos, columns } = this
      const { colWidth, margin, gridStartPos, labelSize } = this.dimensions

      const colStart = index * (colWidth + margin)
      const gridVW = vw - gridStartPos
      const nextNumHiddenCols = columns.length - index - 1
      const sizeOfNextCols = nextNumHiddenCols * labelSize

      if ((colStart + labelSize) > (gridVW + xScrollPos - sizeOfNextCols)) {
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
  background: var(--background-color);
  border: 1px solid var(--accent-color);
  border-radius: 12px;
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: -10px 0px 20px 0px var(--background-color);
  @include daynight;

  @media (max-width: 767px) {
    min-height: calc(100vh - (16px * 2) - 80px);
    max-width: calc(100vw - (16px * 3));
    min-width: calc(100vw - (16px * 3));
    margin-right: 16px;
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 28px - 28px);
    max-width: 560px;
    min-width: 560px;
    margin-right: 28px;
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
  width: 100%;
  height: calc(100vh - 28px - 28px - 40px);
  border-bottom-left-radius: 12px;
  cursor: pointer;
  @include daynight;
  &:hover { background-color: var(--accent-color) }
}

.sticky-label-right {
  position: fixed;
  top: 28px;
  right: 0;
  bottom: 0;
  height: calc(100vh - 28px - 26px);
  box-shadow: -10px 0px 20px 0px var(--background-color);
  background-color:  var(--background-color);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  width: 440px;
  border: 1px solid var(--accent-color);
  border-right: none;

  .header {
    height: 40px;
    width: 100%;
    padding: 12px 13px;
    border-bottom: 1px solid var(--accent-color);
  }

  .label {
    width: 100%;
    border-bottom-left-radius: 11px;
    background-color: var(--background-color);
    height: calc(100% - 40px);
    cursor: pointer;
    @include daynight;
    &:hover { background-color: var(--accent-color) }
  }
}
</style>
