export const state = () => ({
  columns: [],
  x: 0
})

export const getters = {
  getColumns(state) {
    return state.columns
  },
  getScrollPos(state) {
    return state.x
  }
}

export const actions = {
  setColumns(context, columns) {
    context.commit('setColumns', columns)
  },
  addColumn(context, column) {
    context.commit('addColumn', column)
  },
  removeColumn(context, index) {
    context.commit('removeColumn', index)
  },
  setScrollPos(context, x) {
    context.commit('setXScrollPos', x)
  }
}

export const mutations = {
  setColumns(state, columns) {
    state.columns = columns
  },
  addColumn(state, column) {
    state.columns.push(column)
  },
  removeColumn(state, index) {
    state.columns.splice(index, 1)
  },
  setXScrollPos(state, x) {
    state.x = x
  }
}
