<script lang="ts">
  export let showMenu : boolean;
</script>

<a href="/">
  <h1>Yusuf Parak</h1>
  <h2 class:open={showMenu}>
    <span>Design Engineer</span>
  </h2>
</a>

<style lang="scss">
  a {
    display: flex;
    max-width: fit-content;
    flex-direction: column;
    gap: functions.toRem(10px);
    text-decoration: none;
    color: var(--color-text);
  }
  h1, h2 {
    position: relative;
    display: inline-block;
    font-weight: 500;
    max-width: fit-content;
    @include mixins.lh-trim-element;
  }
  h2 {
    span {
      color: var(--color-text-light);
    }
    @media (max-width: functions.toRem(768px)) {
      transition: all .25s ease-in-out;
      visibility: hidden;
      transform: translateX(-100vw);
      opacity: 0;
    }

    &.open {
      visibility: visible;
      transform: translateX(0);
      opacity: 1;
      transition-delay: .25s;
    }
  }
</style>