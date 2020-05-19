<template>
  <div class="navbar">
    <div class="container">
      <NavbarProfile />
      <NavbarControls />
      <NavbarSocial />
    </div>
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
  background: var(--background-color);
  @include daynight;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    color: var(--text-color);
    background: var(--accent-color);
    @include daynight;
  }

  @media (max-width: 767px) {
    display: block; 
    top: 16px;
    left: 16px;
    right: 16px;
    height: 48px;

    .container {
      flex-direction: row;
      align-items: center;
      padding: 0 28px;
      height: 60px;
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    display: block;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 28px 0 28px 28px;
    width: 100px;

    .container {
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      height: 100%;
      width: 80px;
      box-shadow: var(--grid-column-shadow);
    }
  }
}
</style>
