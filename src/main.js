// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/scss/reset.scss'
import '~/assets/scss/fonts.scss'
import '~/assets/scss/colors.scss'
import '~/assets/scss/mixins.scss'
import '~/assets/scss/helpers.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
