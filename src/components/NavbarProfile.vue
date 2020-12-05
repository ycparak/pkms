<template>
  <div class="profile">
    <a
      href="/"
      class="logo">
      <img src="@/assets/images/logo-small.png" alt="Logo">
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavbarProfile',
};
</script>

<style lang="scss" scoped>
.logo {
  pointer-events: visible;
  img {
    padding: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transition: all .2s ease-out;
    @media (max-width: 768px) {
      height: 28px;
      width: 28px;
    }
    &:hover {
      width: 40px;
      height: 40px;
      border-radius: 8px;
    }
  }
}
</style>
