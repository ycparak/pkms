<footer>
  <div class="box">
    <div class="box-row">
      <a draggable="false" href="/" class="logo">YP</a>
      <nav>
        <a draggable="false" class="nav-link" href="/">Portfolio</a>
        <a draggable="false" class="nav-link" href="/writing">Writing</a>
        <a draggable="false" class="nav-link" href="/about">About</a>
      </nav>
    </div>
    <div class="box-row">
      <a class="social-link" href="https://github.com/ycparak/ycparak">21 stars</a>
      <nav>
        <a draggable="false" class="social-link" href="mailto:yusuf@ycparak.com">Email</a>
        <a draggable="false" class="social-link" href="https://twitter.com/ycparak">Twitter</a>
        <a draggable="false" class="social-link" href="https://github.com/ycparak/ycparak">Github</a>
      </nav>
    </div>
  </div>
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

  .box {
    position: relative;
    display: block;
    background-color: rgba(245, 245, 245, 0.6);
    border: 1px solid rgb(229, 231, 235);
    backdrop-filter: blur(16px);
    border-radius: functions.toRem(12px);
    width: 360px;
    box-shadow: 0 4px 8px rgba(0,0,0,.12), inset 0 1px 1px rgba(255,255,255,.12);
    pointer-events: all;

    &-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: functions.toRem(10px) functions.toRem(16px);
      width: 100%;
      &:first-child {
        padding: functions.toRem(12px) functions.toRem(16px);
        border-bottom: 1px solid rgb(229, 231, 235);
      }

      nav {
        display: flex;
        align-items: center;
        gap: functions.toRem(8px);
      }

      a {
        text-decoration: none;
        color: inherit;
        user-select: none;
        &:hover, &:focus, &:active {
          text-decoration: none;
        }

        &.logo {
          @include mixins.interface-type-xl;
        }

        &.nav-link {
          @include mixins.interface-type-md;
        }

        &.social-link {
          @include mixins.interface-type-xs;
          opacity: .5;
        }
      }
    }
  }
</style>