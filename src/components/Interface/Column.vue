<template>
  <div class="column">
    <div
      v-show="showLeftFixedHeader"
      class="overflow-header"
      :style="{ 
        'left': `${leftFixedHeaderPos}px`,
        'zIndex': `${leftFixedHeaderZIndex}`,
      }">
      <span>{{ column.title }}</span>
    </div>
    <div v-if="column.header" class="column-header">
      <span>{{ column.header }}</span>
    </div>
    <div class="section">
      <Profile 
        v-if="column.depth === 0" />
      <PostList 
        v-else-if="column.depth === 1"
        :slot-props="slotProps"
        :type="column.collection" />
    </div>
  </div>
</template>

<script>
import Profile from '~/components/Profile';
import PostList from '~/components/PostList';

export default {
  name: 'Column',
  props: {
    index: {
      type: Number,
      required: true,
    },
    column: {
      type: Object,
      required: false,
      default: null
    },
    columns: {
      type: Array,
      required: true,
    },
    slotProps: {
      type:  Object,
      required: false,
      default: null
    }
  },
  components: {
    Profile,
    PostList,
  },
  data() {
    return {
      scrollPos: null,
      showHeader: false,
      colStart: 136,
      colWidth: 560,
      colMargin: 28,
      fixedHeaderWidth: 32,
    };
  },
  computed: {
    showLeftFixedHeader() {
      const xScrollPos = this.$store.getters.xScrollPos + (this.colStart - this.colMargin);
      const columnXEnd = this.columnXEnd();
      const prevFixedHeaderWidth = this.index * this.fixedHeaderWidth;

      if (xScrollPos >= (columnXEnd - prevFixedHeaderWidth)) return true;
      return false;
    },
    leftFixedHeaderPos() {
      const { index, colStart, colMargin, fixedHeaderWidth } = this;
      return (colStart - colMargin - 12) + (this.index * (fixedHeaderWidth));
    },
    leftFixedHeaderZIndex() {
      return 998 - this.index;
    }
  },
  methods: {
    columnXStart() {
      const { index, colStart, colWidth, colMargin } = this;
      return colStart + (index * (colWidth + colMargin));
    },
    // The x-coord (in px) end of the collumn
    columnXEnd() {
      return this.columnXStart() + this.colWidth;
    },
  }
}
</script>

<style lang="scss" scoped>
.column {
  background: var(--background-color);
  box-shadow: var(--grid-column-shadow);
  border: 1px solid var(--accent-color);
  border-radius: 12px;
  width: 100%;
  max-height: calc(100vh - 28px - 28px);
  @include daynight;

  @media (min-width: 768px) {
    max-width: 560px;
    min-width: 560px;
    margin-right: 28px;
  }

  @media (max-width: 767px) {
    max-width: calc(100vw - (28px * 3));
    min-width: calc(100vw - (28px * 3));
    margin-right: 16px;
    scroll-snap-align: start;
  }

  .column-header {
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid var(--accent-color);
    padding: 6px 44px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    @media (max-width: 767px) {
      padding: 6px 24px;
    }
  }

  .overflow-header {
    display: block;
    position: fixed;
    top: 28px;
    bottom: 28px;
    writing-mode: vertical-lr;
    padding: 22px 8px;
    text-transform: capitalize;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background: var(--accent-color-2);
    box-shadow: var(--grid-column-shadow);
    text-decoration: none;

    @media (max-width: 767px) {
      display: none;
    }

    span {
      position: relative;
      left: 6px;
      font-size: 14px;
    }
  }
}
</style>