<footer>
  <nav class="box">
    <a draggable="false" href="/"><i class="ph ph-intersect-three"></i></a>
    <a draggable="false" href="/"><i class="ph ph-pen-nib-straight"></i></a>
    <a draggable="false" href="/writing"><i class="ph ph-user-circle"></i></a>
    <a draggable="false" href="/about"><i class="ph ph-envelope"></i></a>
    <a draggable="false" href="/about"><i class="ph ph-twitter-logo"></i></a>
    <a draggable="false" href="/about"><i class="ph ph-twitter-logo"></i></a>
  </nav>
</footer>

<style lang="scss">
  footer {
    position: fixed;
    bottom: functions.toRem(20px);
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    pointer-events: none;
    z-index: 999;
    cursor: default;
  }

  nav {
    position: relative;
    display: flex;
    align-items: center;
    width: fit-content;
    gap: functions.toRem(6px);
    padding: functions.toRem(6px);
    padding-bottom: functions.toRem(8px);
    background-color: rgba(245, 245, 245, .8);
    border: 1px solid rgba(0, 0, 0, 0.075);
    border-radius: functions.toRem(12px);
    box-shadow: 0 2px 8px rgba(0,0,0,.12), 0 4px 60px rgba(0,0,0,.12);
    backdrop-filter: blur(16px);
    pointer-events: all;

    a {
      text-decoration: none;
      color: inherit;
      user-select: none;
      height: functions.toRem(36px);
      width: functions.toRem(36px);
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 0.5px rgba(0,0,0,.05);
      box-shadow: 0 1px 2px rgba(0,0,0,.1);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      &:hover, &:focus, &:active {
        text-decoration: none;
      }
    }
  }
</style>