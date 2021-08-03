<template>
  <div>
    <!-- <h1>Weekly updates.</h1> -->
    <div class="updates tenk-widget">
      <div class="tenk-widget-header tenk-header">Weekly updates</div>
      <div v-for="(post, index) in posts" :key="index">
        <TenKUpdatesItem :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TenkUpdates',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin-left: var(--margin);
  margin-right: var(--margin);
}
.updates {
  margin-top: 60px;
}
</style>
