<main>
  <div class="top"></div>
</main>

<style lang="scss">
  .top {
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    background: linear-gradient(to top,transparent,var(--color-background));
    mask-image: linear-gradient(to bottom,var(--color-background) 25%,transparent);
    -webkit-mask-image: linear-gradient(to bottom,var(--color-background) 25%,transparent);
    pointer-events: none;
    height: functions.toRem(110px);
    width: 100%;
  }
</style>