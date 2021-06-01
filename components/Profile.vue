<template>
  <div class="profile">
  </div>
</template>

<script>
export default {
  name: 'Profile',
}
</script>

<style lang="scss">
.profile {
  border-right: 1px solid var(--line);
  min-height: calc(100vh - 60px - 18px);
  transition: all .3s ease-in-out;
  @media (max-width: 768px) {
    border-right: none;
    min-height: auto;
    border-bottom: 1px solid var(--line);
  }
}
</style>
