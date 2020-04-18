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
  width: calc(100% - 200px);
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  left: 16px;
  @media (max-width: 1500px) {
    width: calc(100% - 180px);
  }
  @media (max-width: 768px) {
    width: calc(100% - 160px);
  }
  @media (max-width: 676px) {
    width: calc(100% - 120px);
  }
  @media (max-width: 576px) {
    width: calc(100% - 120px);
  }
}
</style>
