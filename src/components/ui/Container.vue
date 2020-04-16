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
  max-width: 1258px;
  margin: 0 auto;
}
</style>
