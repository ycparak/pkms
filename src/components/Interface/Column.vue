<template>
  <div 
    class="column"
    :class="{ large: column.isMaximised }">
    <div class="header">
      <button @click="closeCol()" class="close"></button>
      <button @click="maximiseCol()" class="maximise"></button>
      <span v-if="column.header">{{ column.header }}</span>
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
  methods: {
    closeCol() {
      this.$store.commit('removeColumn', this.index);
    },
    maximiseCol() {
      // Scroll to col

      // Increase col width
      this.$store.commit('toggleMaximiseCol', this.index);
    },
  }
}
</script>

<style lang="scss" scoped>
.column {
  background: var(--background-color);
  border: 1px solid var(--accent-color);
  border-radius: 12px;
  width: 100%;
  max-height: calc(100vh - 28px - 28px);
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: -10px 0px 20px 0px var(--background-color);
  scroll-snap-align: start;
  @include daynight;

  @media (min-width: 768px) {
    max-width: 560px;
    min-width: 560px;
    margin-right: 28px;
    &.large {
      min-width: calc(100vw - (28px * 3) - 80px);
      max-width: calc(100vw - (28px * 3) - 80px);
    }
  }

  @media (max-width: 767px) {
    max-width: calc(100vw - (28px * 3));
    min-width: calc(100vw - (28px * 3));
    margin-right: 16px;
  }

  .header {
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid var(--accent-color);
    padding: 6px 16px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    @include daynight;
    @media (max-width: 767px) {
      padding: 6px 24px;
    }

    button {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 6px;
      border-radius: 50%;
      background: var(--accent-color);
      &:nth-child(2) { margin-right: 16px; }
      &:hover {
        &.close { background: #FB5F55 }
        &.maximise { background: #2CC941 }
      }
    }
  }
}
</style>