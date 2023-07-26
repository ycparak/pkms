<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";
  import * as config from '$lib/config'
  import { Logo, Menu, MenuToggle, ThemePicker } from '$components'

  let showMenu = false;
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<div class="grid">
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
  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: functions.toRem(204px) 1fr;
    gap: functions.toRem(40px);
    @media (max-width: functions.toRem(768px)) {
      display: block;
    }
  }
  header {
    position: sticky;
    top: 0;
    height: 100vh;
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
      gap: 40px;
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
    z-index: 20;
  }
</style>