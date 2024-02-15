<div class="guideline h t"></div>
<div class="guideline v l"></div>
<div class="guideline h c"></div>
<div class="guideline v c"></div>
<div class="guideline v r"></div>
<div class="guideline h b"></div>

<style lang="scss">
  .guideline {
    position: absolute;
    z-index: 399;
    background-color: red;
  }
  .h {
    width: 100%;
    height: 1px;
    &.t {
      top: 36px;
    }
    &.b {
      bottom: 36px;
    }
    &.c {
      top: 50%;
    }
  }
  .v {
    width: 1px;
    height: 100%;
    &.l {
      left: 36px;
    }
    &.r {
      right: 36px;
    }
    &.c {
      left: 50%;
    }
  }
</style>