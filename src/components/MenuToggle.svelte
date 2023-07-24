<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let showMenu : boolean;
</script>

<button on:click={() => dispatch('toggleMenu')}>
  <div
    class:open={showMenu}
    class="icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
</button>

<style lang="scss">
  button {
    all: unset;
    position: absolute;
    right: functions.toRem(24px);
    margin: 0;
    padding: 0;
    line-height: 0;
    display: none;
    @media (max-width: functions.toRem(768px)) {
      display: block;
    }
  }

  .icon {
    line-height: 0;
    height: 10px;
    width: 13px;
    position: relative;
    margin: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;

    span {
      line-height: 0;
      display: block;
      position: absolute;
      height: 2px;
      width: 13px;
      border-radius: 2px;
      background-color: var(--color-text-dark);
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;

      &:nth-child(2) { top: 4px; }
      &:nth-child(3) { top: 8px; }
    }

    &.open {
      span {
        &:nth-child(1) {
          top: 4px;
          -webkit-transform: rotate(135deg);
          -moz-transform: rotate(135deg);
          -o-transform: rotate(135deg);
          transform: rotate(135deg);
        }
        &:nth-child(2) {
          opacity: 0;
          left: -26px;
        }
        &:nth-child(3) {
          top: 4px;
          -webkit-transform: rotate(-135deg);
          -moz-transform: rotate(-135deg);
          -o-transform: rotate(-135deg);
          transform: rotate(-135deg);
        }
      }
    }
  }
</style>