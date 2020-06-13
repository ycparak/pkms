<template>
  <div
    :id="`column-${index}`"
    class="column"
    :style="{ left : `${index * 36}px` }">
    <ColumnHeader :index="index" :column="column" :post="post" />
    <transition name="fade" mode="out-in">
      <div v-if="columnInView" :key="1">
        <!-- Column section -->
        <div class="section">
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
      <div v-else :key="2" class="column-label">
        <div class="label">
          {{ column.title }}
        </div>
      </div>
    </transition>
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
  computed: {
    columnInView() {
      const x = this.$store.getters['columns/getScrollPos']
      const colWidth = 560
      const margin = 28
      const totalColWidth = colWidth + margin

      const colStart = this.index * (colWidth + margin)
      const colMidPoint = (colStart + (colWidth / 1.7))

      if (x > colMidPoint) {
        return false
      }
      return true
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}

.column-label {
  width: 100%;
  height: calc(100vh - 28px - 28px - 40px);
  border-bottom-left-radius: 12px;
  cursor: pointer;
  @include daynight;
  &:hover {
    background-color: var(--accent-color);
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
</style>
