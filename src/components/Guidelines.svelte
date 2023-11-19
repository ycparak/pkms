<div class="v"></div>
<div class="v"></div>
<div class="v"></div>
<div class="h"></div>

<style lang="scss">
  .h {
    position: absolute;
    top: 23px;
    width: 100%;
    z-index: 9999;
    height: 1px;
    background-color: red;
  }
  .v {
    width: 2px;
    height: 100%;
    min-height: 100vh;
    background-color: red;
    z-index: 999;
    position: absolute;
    left: calc(50% - 1px);
    &:nth-child(2) {
      left: calc(50% - 77px);
    }
    &:nth-child(3) {
      left: calc(50% + 76px);
    }
  }
</style>