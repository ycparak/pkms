<template>
  <div class="navbar">
    <NavbarProfile />
    <NavbarControls />
    <NavbarSocial />
  </div>
</template>

<script>
import NavbarProfile from '@/components/Navigation/NavbarProfile.vue';
import NavbarControls from '@/components/Navigation/NavbarControls.vue';
import NavbarSocial from '@/components/Navigation/NavbarSocial.vue';

export default {
  name: 'Navbar',
  props: ['darkMode'],
  components: {
    NavbarProfile,
    NavbarControls,
    NavbarSocial
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 999;
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
  }
}
</style>
