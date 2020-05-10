<template>
  <header class="header">
    <div class="header__profile">
      <g-link 
        @click.native="revertCollection()"
        to="/" 
        class="header__logo" />
    </div>
    <div class="header__controls">
      <button
        @click="$parent.darkModeToggle()"
        class="header__darkmode"
      />
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: ['darkMode'],
  methods: {
    revertCollection() {
      this.$parent.setCollection('all');
      this.$parent.setNextCollection('all');
    },
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 44px;
  top: 44px;
  right: 44px;
  display: grid;
  grid-template-columns: 75% 1fr;
  align-items: center;
  color: var(--text-color);
  @include daynight;
  @media (max-width: 1500px) {
    top: 32px;
    left: 32px;
    right: 32px;
  }
  @media (max-width: 768px) {
    top: 24px;
    left: 24px;
    right: 24px;
  }
  @media (max-width: 676px) {
    top: 20px;
    left: 20px;
    right: 20px;
  }
  @media (max-width: 576px) {
    top: 12px;
    left: 12px;
    right: 12px;
  }
}
.header__controls {
  text-align: right;
}
.header__logo {
  display: block;
  width: 44px;
  height: 44px;
  background: var(--text-color);
  border-radius: 50%;
  margin-right: 8px;
  pointer-events: visible;
  @media (max-width: 1500px) {
    width: 36px;
    height: 36px;
  }
}
.header__darkmode {
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
