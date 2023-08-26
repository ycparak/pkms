<button class="button-menu button-primary button-icon">
  <div class="inner"><i class="icon ph-fill ph-list"></i></div>
</button>

<div class="fader left"></div>
<div class="fader right"></div>
<svelte:window bind:innerWidth={$screenWidth} bind:innerHeight={$screenHeight} />

<style lang="scss">
  .button-menu {
    position: fixed;
    top: 18px;
    left: 18px;
    z-index: 99;
  }

  .fader {
    --bg: rgba(245, 243, 243, 1);
    // --bg: blue;
    position: fixed;
    top: 18px;
    width: 60px;
    height: 32px;
    pointer-events: none;
    z-index: 98;
    &.left {
      --start: calc(18px + 32px + 10px);
      --width: calc(var(--start) + 60px);
      width: var(--width);
      background: linear-gradient(to right, var(--bg) var(--start), rgba(245, 243, 243, 0));
    }
    &.right {
      right: 0;
      background: linear-gradient(to left, var(--bg) 10%, rgba(245, 243, 243, 0));
    }
  }
</style>