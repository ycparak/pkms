// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import Grid from '~/components/Interface/Grid.vue'
import Column from '~/components/Interface/Column.vue'

import '~/assets/fonts/fonts.css'
import '~/assets/scss/main.scss'

import Vuex from 'vuex'

export default function (Vue, { router, head, isClient, appOptions }) {
  head.htmlAttrs = {
    lang: 'en',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: 'Yusuf Parak' },
      { name: "description", content: '' },
      { name: "keywords", content: '' },
    ],
  },

  // Set global components
  Vue.component('Layout', DefaultLayout)
  Vue.component('Grid', Grid)
  Vue.component('Column', Column)

  // Vuex
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store({
    state: {
      columns: [{ depth: 0, title: 'About' }],
      columnsTouched: false,
    },
    mutations: {
      setColumns(state, columns) {
        state.columns = columns;
      },
      touchColumns(state) {
        state.columnsTouched = true;
      }
    },
    getters: {
      columns(state) {
        return state.columns;
      }
    }
  })
}
