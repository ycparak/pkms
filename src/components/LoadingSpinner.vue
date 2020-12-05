<template>
  <div class="spin"></div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
};
</script>

<style lang="scss" scoped>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 20px auto;
  border: 4px solid palevioletred;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
