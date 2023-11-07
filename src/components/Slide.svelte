<script lang="ts">
  export let index = 0;
</script>

<div 
  id="slide-{index}"
  class="slide">
  <div class="wrapper">
    <div class="img">
      {index + 1}
    </div>
  </div>
</div>

<style lang="scss">
  .slide {
    display: flex;
    min-height: 100%;
    width: 100%;
    flex-shrink: 0;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
  }
</style>