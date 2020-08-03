<template>
  <div
    v-show="showPanel"
    class="control-panel"
    @click.self="$parent.toggleControlPanel()">
    <div class="inner">
      <div class="header">
        <span class="subtitle">Control Panel</span>
      </div>
      <div class="columns" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlPanel',
  props: {
    showPanel: {
      type: Boolean,
      required: true
    }
  }
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
  padding: 16px;
  @include daynight;
  .inner {
    background-color: var(--accent-color-2);
    color: var(--text-color);
    width: calc(100vw - (28px * 2));
    height: calc(100vh - (28px * 2));
    max-height: 360px;
    margin: 0 auto;
    border-radius: 16px;
    overflow-y: scroll;
    box-shadow: 0 4px 8px 0 rgba(6, 6, 6, .3);

    @media (min-width: 767px) {
      width: 600px;
      height: 50vh;
      max-height: 360px;
    }
  }
}

.header {
  color: var(--text-color);
  border-bottom: 1px solid var(--accent-color-3);
  padding: 4px 28px 8px 28px;
}
</style>
