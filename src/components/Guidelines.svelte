<div class="line"></div>
<div class="line"></div>
<div class="line"></div>

<style lang="scss">

  .line {
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