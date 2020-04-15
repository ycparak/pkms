<template>
  <div class="site">
    <div class="site-wrapper">
      <ContainerFluid>
        <Header />
        <slot />
      </ContainerFluid>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  name: 'DefaultLayout',
  components: {
    Header
  }
}
</script>

<style lang="scss">
</style>
