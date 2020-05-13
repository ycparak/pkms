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
  width: calc(100% - 80px);
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  background: blue;
}
</style>
