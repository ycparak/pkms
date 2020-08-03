<template>
  <div class="navbar">
    <NavbarControls :show-panel="showPanel" />
    <NavbarProfile />
    <NavbarSocial />
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    showPanel: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  color: var(--text-color);
  background: var(--accent-color);
  pointer-events: none;
  @include daynight;

  @media (max-width: 767px) {
    top: 16px;
    left: 16px;
    right: 16px;
    height: 48px;
    flex-direction: row;
    align-items: center;
    padding: 0 28px;
    height: 60px;
  }

  @media (min-width: 768px) {
    top: 28px;
    left: 28px;
    bottom: 28px;
    flex-direction: column;
    padding: 20px 0;
    width: 80px;
    min-height: calc(100vh - 28px - 28px);
  }
}
</style>
