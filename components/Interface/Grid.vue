<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Grid'
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  @media (min-width: 768px) {
    padding: 28px;
    position: relative;
    margin: 0;
    padding-left: 136px;
    scroll-padding-left: 136px;
  }

  @media (max-width: 767px) {
    padding: 16px;
    padding-top: 92px;
    scroll-padding-left: 16px;
  }
}
</style>
