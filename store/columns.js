export const state = () => ({
  columns: [
    { depth: 0, title: 'About', header: 'About' },
    { depth: 1, title: 'All', header: 'All', collection: 'all' },
    { depth: 1, title: 'Projects', header: 'Projects', collection: 'projects' },
    { depth: 1, title: 'Essays', header: 'Essays', collection: 'essays' },
    { depth: 1, title: 'Tweetstorms', header: 'Tweetstorms', collection: 'tweetstorms' },
    { depth: 1, title: 'Notes', header: 'Notes', collection: 'notes' },
    { depth: 1, title: 'Quotes', header: 'Quotes', collection: 'quotes' }
  ],
  xScrollPos: 0
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
  },
  setXScrollPos(context, xPos) {
    context.commit('setXScrollPos', xPos)
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
