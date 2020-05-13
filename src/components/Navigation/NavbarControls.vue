<template>
  <div class="controls">
    <button
      @click="$parent.$parent.darkModeToggle()"
      class="btn-darkmode"
    />
  </div>
</template>

<script>
export default {
  name: 'NavbarControls',
}
</script>

<style lang="scss" scoped>
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
  pointer-events: visible;
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
