<template>
  <div
    @click.self="$parent.toggleControlPanel()"
    v-show="showPanel"
    class="control-panel">
    <div class="inner">dsfg</div>
  </div>
</template>

<script>
export default {
  name: 'ControlPanel',
  props: ['showPanel']
}
</script>

<style lang="scss" scoped>
.control-panel {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 900;
  color: #fff;
  @include daynight;
  .inner {
    background-color: var(--text-color);
    width: 50vw;
    height: 50vh;
    color: #000;
    margin: 0 auto;
    border-radius: 16px;
    overflow-y: scroll;
  }
}
</style>