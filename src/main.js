// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

import Container from '~/components/ui/Container.vue'
import ContainerFluid from '~/components/ui/ContainerFluid.vue'
import Button from '~/components/ui/Btn.vue'
import LoadingSpinner from '~/components/ui/LoadingSpinner.vue'

import '~/assets/fonts/fonts.css'

import '~/assets/scss/reset.scss'
import '~/assets/scss/variables.scss'
import '~/assets/scss/mixins.scss'
import '~/assets/scss/helpers.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Container', Container)
  Vue.component('ContainerFluid', ContainerFluid)
  Vue.component('Btn', Button)
  Vue.component('LoadingSpinner', LoadingSpinner)
}
