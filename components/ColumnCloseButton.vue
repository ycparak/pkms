<template>
  <button @click="changeRoute(index, column)">
    <XIcon class="icon" />
  </button>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
  name: 'ColumnCloseButton',
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
    }
  },
  methods: {
    changeRoute() {
      const { path } = this.$route
      const queryParams = this.$route.query.col
      if (this.index === 0 && (queryParams === undefined || queryParams.length === 0)) {
        this.$router.push({ path: '/' })
      } else if (this.index === 0 && typeof queryParams === 'string') {
        this.$router.push({ path: `/${queryParams}` })
      } else if (this.index === 0) {
        const firstQueryParam = queryParams.shift()
        this.$router.push({ path: `/${firstQueryParam}`, query: { col: queryParams } })
      } else if (this.index > 0 && typeof queryParams === 'string') {
        this.$router.push({ name: 'slug' })
      } else if (this.index > 0) {
        const queries = queryParams.filter(query => query !== this.column.slug.split('/')[1])
        this.$router.push({ path, query: { col: queries } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
  width: 11.5px;
  height: 11.5px;
  margin: 0;
  margin-right: 13px;
  border-radius: 50%;
  background-color: var(--line-color);
  position: relative;
  top: -.5px;

  .icon {
    vertical-align: top;
    position: relative;
    top: 1px;
    width: 10px;
    height: 10px;
    color: #000;
    opacity: 0;
  }

  &:hover {
    background-color: #FB5F55;
    .icon {
      opacity: 1;
    }
  }
}
</style>
