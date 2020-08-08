export const state = () => ({
  loading: true,
  isPopoverVisible: false,
  popover: null,
  columns: []
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
  }
}
