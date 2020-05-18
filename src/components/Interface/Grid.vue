<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Grid',
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  overflow: scroll;

  @media (min-width: 768px) {
    padding: 28px;
    position: relative;
    margin: 0;
    padding-left: 136px;
  }

  @media (max-width: 767px) {
    padding: 16px;
    padding-top: 96px;
    scroll-snap-type: x mandatory;
    scroll-padding: 16px;
  }
}
</style>