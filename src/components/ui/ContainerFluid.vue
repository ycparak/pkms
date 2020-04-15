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
  width: 100%;
  padding: 56px;
  margin: 0 auto;
  min-height: calc(100vh - 20px);
  @media (max-width: 576px) {
    padding: 8px;
  }
  @media (max-width: 768px) {
    padding: 24px;
  }
}
</style>
