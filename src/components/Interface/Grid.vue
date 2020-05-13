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
  height: 100%;
  min-height: 100vh;
  padding: 28px;
  @media (min-width: 768px) {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    position: relative;
    margin: 0;
    padding-left: 148px;
    padding-right: 0;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding: 148px;
  }
}
</style>