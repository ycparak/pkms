<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.container {
  padding: 0 28px;
  @media (max-width: 1150px) {
    padding: 0 20px;
  }
  @media (max-width: 990px) {
    padding: 0 28px;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
  }
}
</style>
