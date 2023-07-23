<script lang="ts">
  import '$styles/main.scss'
  import * as config from '$lib/config'
  import { Logo, Menu } from '$components'
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<div class="grid">

  <div class="sidebar">
    <nav>
      <Logo />
      <Menu />
    </nav>
  </div>

  <main>
    <!-- <slot /> -->
  </main>
</div>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: 204px 1fr;
  }
  .sidebar {
    position: sticky;
    top: 0;
    height: 100vh;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -1px;
      width: 1px;
      height: 100%;
      background-color: var(--color-line);
    }

    nav {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: auto;
      padding: 24px;
      gap: 40px;
    }
  }
</style>