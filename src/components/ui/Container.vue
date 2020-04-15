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
  width: calc(100vw - 80px);
  max-width: 1260px;
  margin: 0 auto;
  @media (max-width: 576px) {
    width: calc(100vw - 28px);
  }
  @media (max-width: 768px) {
    width: calc(100vw - 52px)
  }
}
</style>
