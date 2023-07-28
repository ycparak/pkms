<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";
  import { fly } from 'svelte/transition'
	import { expoOut, expoIn } from 'svelte/easing'
  import { Logo, Menu, MenuToggle, ThemePicker } from '$components'

  export let data;
  $: pathname = data.pathname;

  let showMenu = false;
</script>

<div class="grid" data-sveltekit-noscroll>
  <header class:open={showMenu}>
    <div class="header-container">
      <Logo showMenu={showMenu} />
      <Menu showMenu={showMenu} />
      <ThemePicker showMenu={showMenu} />
      <MenuToggle
        on:toggleMenu={() => showMenu = !showMenu}
        showMenu={showMenu} />
    </div>
  </header>
  {#key pathname}
  <main
    in:fly={{ x: 175, easing: expoOut, duration: 1500, delay: 500 }}
    out:fly={{ x: -2000, easing: expoIn, duration: 500 }}>
    <slot />
  </main>
  {/key}
</div>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: functions.toRem(204px) 1fr;
    @media (max-width: functions.toRem(768px)) {
      display: block;
    }
  }
  header {
    background-color: var(--color-background);
    position: sticky;
    top: 0;
    height: 100vh;
    z-index: 2;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -1px;
      width: functions.toRem(1px);
      height: 100%;
      background-color: var(--color-line);
    }
    @media (max-width: functions.toRem(768px)) {
      position: fixed;
      top: 0;
      left: 0;
      max-height: functions.toRem(42px);
      background-color: var(--color-background);
      z-index: 100;
      width: 100%;
      transition: all .25s ease-in-out;
      &::after {
        display: none;
      }
    }

    .header-container {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: auto;
      padding: functions.toRem(24px);
      gap: var(--spacer-lg);
      @media (max-width: functions.toRem(768px)) {
        overflow: hidden;
        width: 100%;
        padding: functions.toRem(16px) functions.toRem(20px);
  
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: functions.toRem(41px);
          width: 100%;
          height: functions.toRem(1px);
          background-color: var(--color-line);
          transition: all .25s ease-in-out;
        }
      }
    }

    &.open {
      background-color: var(--color-background-accent);
      max-height: 100%;
      .header-container {
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        &::after {
          transform: translateX(-100%) ;
        }
      }
    }
  }


  main {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: [full-start] 1fr [main-start content-start] functions.toRem(28px) [body-start] functions.toRem(432px) [body-end] functions.toRem(28px) [content-end] functions.toRem(28px) [aside-start] functions.toRem(280px) [aside-end main-end] functions.toRem(28px) 1fr [full-end];
    height: fit-content;
    padding: 124px 0;
    font-size: functions.toRem(15.3203px);
  }
</style>