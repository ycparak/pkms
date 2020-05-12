<template>
  <div class="sidebar">
    <div class="sidebar__profile">
      <g-link 
        @click.native="revertCollection()"
        to="/" 
        class="sidebar__logo" />
    </div>
    <div class="sidebar__controls">
      <button
        @click="$parent.darkModeToggle()"
        class="sidebar__darkmode"
      />
    </div>
    <SidebarSocialLinks />
  </div>
</template>

<script>
import SidebarSocialLinks from '@/components/SidebarSocialLinks.vue';

export default {
  name: 'Sidebar',
  props: ['darkMode'],
  components: {
    SidebarSocialLinks,
  },
  methods: {
    revertCollection() {
      this.$parent.setCollection('all');
      this.$parent.setNextCollection('all');
    },
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 28px;
  top: 28px;
  bottom: 28px;
  width: 80px;
  display: none;
  border-radius: 8px;
  color: var(--text-color);
  background: var(--accent-color);
  @include daynight;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 28px 0;
  }
}
.sidebar__controls {
  text-align: right;
}
.sidebar__logo {
  display: block;
  width: 36px;
  height: 36px;
  background: var(--text-color);
  border-radius: 50%;
  pointer-events: visible;
}
.sidebar__darkmode {
  display: inline-block;
  width: 16px;
  height: 16px;
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
