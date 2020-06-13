export const state = () => ({
  loading: true,
  popover: null,
  columns: [],
  vw: 0,
  x: 0
})

export const getters = {
  isLoading(state) {
    return state.loading
  },
  getPopover(state) {
    return state.popover
  },
  getColumns(state) {
    return state.columns
  },
  getViewportWidth(state) {
    return state.vw
  },
  getScrollPos(state) {
    return state.x
  }
}

export const actions = {
  setLoading(context, loading) {
    context.commit('setLoading', loading)
  },
  setPopover(context, popover) {
    context.commit('setPopover', popover)
  },
  setColumns(context, columns) {
    context.commit('setColumns', columns)
  },
  addColumn(context, column) {
    context.commit('addColumn', column)
  },
  removeColumn(context, index) {
    context.commit('removeColumn', index)
  },
  setViewportWidth(context, vw) {
    context.commit('setViewportWidth', vw)
  },
  setScrollPos(context, x) {
    context.commit('setXScrollPos', x)
  }
}

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },
  setPopover(state, options) {
    if (options.isPopoverVisible) {
      state.popover = options
    } else {
      state.popover = null
    }
  },
  setColumns(state, columns) {
    state.columns = columns
  },
  addColumn(state, column) {
    state.columns.push(column)
  },
  removeColumn(state, index) {
    state.columns.splice(index, 1)
  },
  setViewportWidth(state, vw) {
    state.vw = vw
  },
  setXScrollPos(state, x) {
    state.x = x
  }
}
