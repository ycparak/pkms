<template>
  <div id="grid" ref="grid" class="grid" @scroll="getScrollPos()">
    <Column
      v-for="(column, index) in columns"
      :key="index"
      :index="index"
      :column="column"
      :columns="columns"
      :vw="vw"
      :x="x" />
  </div>
</template>

<script>
export default {
  name: 'Grid',
  data() {
    return {
      vw: 0,
      x: 0
    }
  },
  computed: {
    columns() {
      const cols = this.$store.getters['columns/getColumns']
      return cols
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.$store.dispatch('columns/setLoading', false)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.vw = window.innerWidth
    },
    getScrollPos() {
      this.x = this.$refs.grid.scrollLeft
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  @media (min-width: 768px) {
    padding: 28px;
    position: relative;
    margin: 0;
    padding-left: 100px;
    scroll-padding-left: 100px;
  }

  @media (max-width: 767px) {
    padding: 16px;
    padding-top: 92px;
    scroll-padding-left: 16px;
  }
}
</style>
