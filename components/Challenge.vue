<template>
  <div class="challenge">
    <!-- <p>
      920 days (2.5 years) to get to $10k MRR. 
    </p> -->
  </div>
</template>

<script>
export default {
  name: 'Challenge',
}
</script>

<style lang="scss" scoped>
.challenge {
}
.challenge-header {
  font-size: 14px;
  font-weight: 200;
  line-height: 1;
}
p {
  strong {
    font-weight: 800;
  }
  &:first-child { margin-top: -4px; }
  &:last-child { margin-bottom: 0; }
}
</style>
