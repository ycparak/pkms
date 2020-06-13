<template>
  <div class="header">
    <button @click="closeCol()">
      <XIcon class="icon" />
    </button>
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
import { XIcon } from 'vue-feather-icons'

export default {
  name: 'ColumnHeader',
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
    post: {
      type: Object,
      required: false,
      default: null
    }
  },
  methods: {
    closeCol() {
      if (this.column.depth === 2) {
        this.$parent.changeRoute()
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
.header {
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid var(--accent-color);
  padding: 6px 13px;

  button {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0;
    margin-right: 13px;
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
