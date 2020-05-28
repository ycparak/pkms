<template>
  <div class="column">
    <!-- Column header -->
    <div class="header">
      <button @click="closeCol()">
        <XIcon class="icon" />
      </button>
      <template v-if="column.depth !== 2">
        <span class="subtitle post-subtitle">{{ column.header }}</span>
      </template>
      <template v-else>
        <span class="subtitle post-subtitle">{{ $moment(column.post.date).format('DD MMM YYYY') }}</span>
        <span class="subtitle post-subtitle muted">&middot;</span>
        <span v-if="column.header" class="subtitle post-subtitle muted">{{ column.header }}</span>
      </template>
    </div>
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
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
  name: 'Column',
  components: {
    XIcon
  },
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
  methods: {
    closeCol() {
      if (this.column.depth === 2) {
        this.changeRoute()
      } else {
        this.$store.dispatch('columns/removeColumn', this.index)
      }
    },
    changeRoute() {
      const { path } = this.$route
      const queryParams = this.$route.query.col
      if (this.index === 0 && (queryParams === undefined || queryParams.length === 0)) {
        this.$router.push({ name: 'index' })
      } else if (this.index === 0 && typeof queryParams === 'string') {
        this.$router.push({ path: `/${queryParams}` })
      } else if (this.index === 0) {
        const firstQueryParam = queryParams.shift()
        this.$router.push({ path: `/${firstQueryParam}`, query: { col: queryParams } })
      } else if (this.index > 0 && typeof queryParams === 'string') {
        this.$router.push({ name: 'slug' })
      } else if (this.index > 0) {
        const queries = queryParams.filter(query => query !== this.column.slug.split('/')[1])
        this.$router.push({ name: 'slug', query: { col: queries } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  background: var(--background-color);
  border: 1px solid var(--accent-color);
  border-radius: 12px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: -10px 0px 20px 0px var(--background-color);
  scroll-snap-align: start;
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
