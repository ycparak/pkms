<template>
  <div class="navbar">
    <NavbarProfile />
    <NavbarControls />
    <NavbarSocial />
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0;
  color: var(--text-color);
  border: 1px solid var(--accent-color-2);
  border-left: none;
  pointer-events: none;
  border-radius: 12px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: var(--accent-color-2);
  @include daynight;

  @media (max-width: 767px) {
    top: 16px;
    left: 16px;
    right: 16px;
    flex-direction: row;
    align-items: center;
    padding: 0 28px;
    height: 60px;
  }

  @media (min-width: 768px) {
    top: 28px;
    left: 0;
    bottom: 28px;
    flex-direction: column;
    padding: 14px 0;
    padding-right: 4px;
    width: 68px;
    min-height: calc(100vh - 28px - 28px);
  }
}
</style>
