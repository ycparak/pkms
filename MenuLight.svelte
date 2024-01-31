<script lang="ts">
  export let path: string;
</script>

<div class="menu">
  <nav>
    <a href="/" class:active={path === '/'}>craft</a>
    <a href="/about" class:active={path === '/about'}>about</a>
    <a target="_blank" href="mailto:yusuf.parak@gmail.com">email</a>
    <a target="_blank" href="https://twitter.com/ycparak">twitter</a>
  </nav>
</div>

<style lang="scss">
  .menu {
    transform: translate(-50%, -50%);
    position: fixed;
    left: 50%;
    top: functions.toRem(39px);
    z-index: 199;
  }
  nav {
    position: relative;
    background-color: var(--color-card-translucent);
    border: 1px solid var(--color-border);
    border-radius: functions.toRem(30px);
    // backdrop-filter: blur(16px);
    height: functions.toRem(28px);
    box-shadow: 0 2px 4px rgba(0,0,0,.04), inset 0 1px 1px rgba(255,255,255,.12);
    pointer-events: all;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 functions.toRem(14px);

    a {
      color: var(--color-text-accent);
      @include mixins.interface-type-sm;
      text-decoration: none;
      transition: all .3s ease;
      &.active {
        color: var(--color-text);
      }
      &:hover, &:active {
        color: var(--color-text);
      }
      &:focus {
        outline: none;
        color: var(--color-text);
      }
    }
  }
</style>