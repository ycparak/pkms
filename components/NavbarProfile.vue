<template>
  <div class="profile">
    <nuxt-link
      to="/"
      class="logo">
      <img src="~/assets/img/logo_low-res.png" width="50px" alt="Logo">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavbarProfile'
}
</script>

<style lang="scss" scoped>
.logo {
  pointer-events: visible;
  img {
    padding: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: var(--intense-shadow);
    @media (max-width: 768px) {
      height: 28px;
      width: 28px;
    }
    &:hover {
      transition: all .3s ease-out;
      width: 56px;
      height: 56px;
      border-radius: 8px;
      margin-top: -9px;
    }
  }
}
</style>
