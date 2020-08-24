<template>
  <div class="navbar">
    <NavbarProfile />
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
  color: var(--text-color);
  border: 1px solid var(--line-color);
  border-left: none;
  pointer-events: none;
  border-radius: 12px;
  background-color: var(--navbar-color);
  &.multiple-columns {
    box-shadow: var(--navbar-shadow);
  }

  @media (max-width: 767px) {
    top: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    align-items: center;
    padding: 0 4vw;
    height: 60px;
    border-radius: 0;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid var(--line-color);
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
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
