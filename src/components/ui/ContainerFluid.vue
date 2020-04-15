<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContainerFluid'
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 576px) {
    width: calc(100vw - 28px);
  }
  @media (max-width: 768px) {
    width: calc(100vw - 52px)
  }
}
</style>
