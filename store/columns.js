export const state = () => ({
  columns: []
})

export const getters = {
  getColumns(state) {
    return state.columns
  },
  getXScrollPos(state) {
    return state.xScrollPos
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
  setXScrollPos(state, xPos) {
    state.xScrollPos = xPos
  }
}
