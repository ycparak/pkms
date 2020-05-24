<template>
  <div class="column">
    <div class="header">
      <button @click="closeCol()">
        <XIcon class="icon" />
      </button>
      <span v-if="column.header" class="subtitle post-subtitle">{{ column.header }}</span>
      <template v-if="column.depth === 2">
        <span class="subtitle post-subtitle muted">&middot;</span>
        <span class="subtitle post-subtitle">{{ post.date }}</span>
      </template>
    </div>
    <div class="section">
      <Profile 
        v-if="column.depth === 0" />
      <PostList 
        v-else-if="column.depth === 1"
        :slot-props="slotProps"
        :type="column.collection" />
      <PostItem 
        v-else-if="column.depth === 2"
        :slot-props="slotProps"
        :post="post" />
    </div>
  </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons';
import Profile from '~/components/Profile';
import PostList from '~/components/PostList';
import PostItem from '~/components/PostItem';

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
    },
    post: {
      type: Object,
      required: false,
      default: null,
    }
  },
  components: {
    XIcon,
    Profile,
    PostList,
    PostItem
  },
  methods: {
    closeCol() {
      this.$store.commit('removeColumn', this.index);
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
  }

  @media (max-width: 767px) {
    max-width: calc(100vw - (16px * 3));
    min-width: calc(100vw - (16px * 3));
    margin-right: 16px;
  }

  .header {
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid var(--accent-color);
    padding: 6px 16px;

    button {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin: 0;
      margin-right: 12px;
      border-radius: 50%;
      background: var(--accent-color);

      .icon {
        vertical-align: top;
        position: relative;
        top: 1px;
        width: 10px;
        height: 10px;
        color: var(--background-color);
        opacity: 0;
      }

      &:hover {
        background: #FB5F55;
        .icon {
          opacity: 1;
        }
      }
    }

    .post-subtitle {
      vertical-align: top;
      margin: 0 4px;
      padding: 0;
      &:first-child { margin-left: 0; }
      &:first-child { margin-right: 0; }
      &.muted { color: var(--neutral-color); }
    }
  }
}
</style>