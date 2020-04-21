<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
.container {
  width: calc(100% - 120px);
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  left: 16px;
  @media (min-width: 576px) {
    width: calc(100% - 120px);
  }
  @media (min-width: 676px) {
    width: calc(100% - 160px);
  }
  @media (min-width: 768px) {
    width: calc(100% - 280px);
  }
  @media (min-width: 1060px) {
    width: calc(100% - 400px);
  }
}
</style>
