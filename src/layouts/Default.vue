<template>
  <div class="site">
    <div class="site-wrapper">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
</style>
