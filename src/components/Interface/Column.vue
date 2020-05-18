<template>
  <div class="column">
    <div v-if="false" class="overflow-header">
      <span>{{ column.title }}</span>
    </div>
    <div class="column-header">
      <span>{{ column.title }}</span>
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
    column: {
      type: Object,
      required: false,
      default: null
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
    };
  },
}
</script>

<style lang="scss" scoped>
.column {
  background: var(--background-color);
  box-shadow: var(--grid-column-shadow);
  scroll-snap-align: start;
  border: 1px solid var(--accent-color);
  border-radius: 12px;
  width: 100%;
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
    writing-mode: vertical-lr;
    transform: translateX(508px);
    height: 100%;
    padding: 16px 4px;
    text-transform: capitalize;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    height: calc(100vh - 28px - 28px);
    border: 1px solid var(--accent-color);
    background: var(--background-color);
    z-index: 12;
  }
}
</style>