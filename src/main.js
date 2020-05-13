// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/fonts/fonts.css'
import '~/assets/scss/main.scss'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = {
    lang: 'en',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: 'Yusuf Parak' },
      { name: "description", content: '' },
      { name: "keywords", content: '' },
    ],
  },

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
