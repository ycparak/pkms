<template>
  <div class="wrapper">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
};
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100%;
}
</style>
