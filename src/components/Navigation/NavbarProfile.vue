<template>
  <div class="profile">
    <g-link 
      to="/" 
      class="logo" />
  </div>
</template>

<script>
export default {
  name: 'NavbarProfile',
}
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  width: 36px;
  height: 36px;
  background: var(--text-color);
  border-radius: 50%;
  pointer-events: visible;
}
</style>
