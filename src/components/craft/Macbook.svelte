<script lang="ts">
  export let src : string;
</script>

<div class="macbook" style="background-image: url({src});"></div>

<style lang="scss">
  .macbook {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 90%;
    margin-top: toRem(32px);
  }
</style>