<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.container {
  padding: 0 28px;
  @media (max-width: 768px) {
    padding: 0 12px;
  }
}
</style>
