<template>
  <div class="profile">
    <nuxt-link
      to="/"
      class="logo" />
  </div>
</template>

<script>
export default {
  name: 'NavbarProfile'
}
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  width: 36px;
  height: 36px;
  background-color: var(--note-color);
  border-radius: 50%;
  pointer-events: visible;
  @media (max-width: 768px) {
    height: 28px;
    width: 28px;
  }
}
</style>
