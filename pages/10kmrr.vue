<template>
  <div class="index">
    <Grid>
      <div class="post-locked">
        This page is currently locked. It should be up shortly (within a week).
      </div>
    </Grid>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style lang="scss" scoped>
.post-locked {
  grid-column: 3;
}
</style>
