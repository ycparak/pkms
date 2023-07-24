<script lang="ts">
  export let showMenu : boolean;
</script>

<div class:open={showMenu} class="circle"></div>

<style lang="scss">
  .circle {
    margin-top: auto;
    width: 12px;
    height: 12px;
    background-color: #000;
    border-radius: 50%;
    @media (max-width: functions.toRem(768px)) {
      transition: all .25s ease-in-out;
      visibility: hidden;
      transform: translateX(-100vw);
      opacity: 0;

      &.open {
        visibility: visible;
        transform: translateX(0);
        opacity: 1;
        transition-delay: .25s;
      }
    }

    @media (max-height: functions.toRem(590px)) {
      display: none;
    }
  }
</style>