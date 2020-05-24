<template>
  <div class="controls">
    <button
      @click="$parent.$parent.toggleControlPanel()"
      class="btn-control-panel"
      :class="{ active : showPanel }">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
    <button
      @click="$parent.$parent.darkModeToggle()"
      class="btn-darkmode"
    />
  </div>
</template>

<script>
export default {
  name: 'NavbarControls',
  props: ['showPanel']
}
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: column;
  pointer-events: visible;
}
.btn-control-panel {
  position: relative;
  display: block;
  margin-bottom: 20px;
  width: 16px;
  height: 16px;
  z-index: 900;
  @include daynight;
  .line {
    display: block;
    background: var(--text-color);
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    right: 0;
    height: 2px;
    transform-origin: center center;
    @include daynight;
    &:nth-child(1) { transform: translateY(6px); };
    &:nth-child(3) { transform: translateY(-6px); };
  }

  &:hover {
    .line { background: var(--neutral-color); }
  }

  &.active {
    .line {
      &:nth-child(1) {
        transform: translateY(0) rotate(45deg) scaleX(1.1);
      }
      &:nth-child(2) {
        transform: scaleX(0);
      }
      &:nth-child(3) {
        transform: translateY(0) rotate(-45deg) scaleX(1.1);
      }
    }
  }
}
.btn-darkmode {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  overflow: hidden;
  transition-property: box-shadow;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  box-shadow: var(--icon-toggle-shadow);
  position: relative;
  top: 1.4px;
  margin: 0;
  &::after {
    background: var(--text-color);
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    transform: translateX(var(--darkmode-toggle-translate));
    @include daynight;
  }
  &:hover {
    box-shadow: var(--icon-toggle-shadow-hover);
  }
  &:hover::after {
    background: var(--neutral-color);
  }
}
</style>
