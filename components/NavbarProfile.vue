<template>
  <div class="profile">
    <a
      href="/"
      class="logo">
      <img src="~/assets/img/logo_low-res.png" width="50px" alt="Logo">
    </a>
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
    transition: all .3s ease-out;
    @media (max-width: 768px) {
      height: 28px;
      width: 28px;
    }
    &:hover {
      width: 52px;
      height: 52px;
      border-radius: 8px;
      margin-top: -6px;
    }
  }
}
</style>
