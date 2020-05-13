<template>
  <div class="sidebar">
    <div class="sidebar__container">
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
.sidebar { display: none; }

@media (min-width: 768px) {
  .sidebar {
    display: block;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 28px;
    bottom: 28px;
    padding-left: 28px;
    width: 48px;
    background: var(--background-color);
    @include daynight;
  }
  .sidebar__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 32px 0;
    height: 100%;
    width: 80px;
    border-radius: 12px;
    color: var(--text-color);
    background: var(--accent-color);
    box-shadow: var(--grid-column-shadow);
    @include daynight;
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
}
</style>
