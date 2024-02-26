<script lang="ts">
  import { projectSlide } from '$lib/stores';
  import { menuSizes } from '$lib/config';
	import { spring } from 'svelte/motion';
  import { blur } from 'svelte/transition';
  import { backIn, backOut } from 'svelte/easing';

  export let path: string;

  const springWidth = spring(menuSizes.default.width, {
    stiffness: 0.05,
    damping: 0.225,
    precision: 0.1
  });

  let rootPath = '';
  let showNav = false;
  let width = menuSizes.default.width;
  let height = menuSizes.default.height;

  $: rootPath = path.split('/')[1];
  $: if ($projectSlide.link) {
    width = menuSizes.craft[$projectSlide.linkTitle as keyof typeof menuSizes.craft].width;
    height = menuSizes.craft[$projectSlide.linkTitle as keyof typeof menuSizes.craft].height;
    $springWidth = width;
  } else {
    width = menuSizes.default.width;
    height = menuSizes.default.height;
    $springWidth = width;
  }
</script>

<div class="menu">
  <div class="backdrop"></div>
  <div class="container" style="max-height: {height}px; width: {$springWidth}px">
    <div class="island">
      <!-- Craft -->
      {#if $projectSlide.link}
        <div
          class="craft"
          in:blur={{ delay: 100, duration: 400, amount: 5, easing: backOut }}>
          <button
            class="collapsed-menu btn btn-none"
            on:click={() => showNav = !showNav}>
            <i class="ph-bold { showNav ? 'pg-x' : 'ph-dots-three' }"></i>
          </button>
          <a
            class="link btn btn-none"
            href={$projectSlide.link}
            target={$projectSlide.linkIsExternal ? '_blank' : ''}>
            <div class="btn-content">
              <span>{$projectSlide.linkTitle}</span>
              <div class="icon">
                <i class="ph-bold { $projectSlide.linkIsExternal ? 'ph-arrow-up-right' : 'ph-arrow-right' }"></i>
              </div>
            </div>
          </a>
        </div>

      <!-- Nav -->
      {:else}
        <nav
          in:blur={{ delay: 100, duration: 400, amount: 5, easing: backOut }}>
          <a href="/" class:active={rootPath === '' || rootPath === 'craft'}>craft</a>
          <a href="/writing" class:active={rootPath === 'writing'}>writing</a>
          <a href="/#about" class:active={rootPath === 'about'}>
            about
          </a>
        </nav>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .menu {
    position: fixed;
    left: 50%;
    bottom: calc(var(--space-container) - 10px);
    transform: translate(-50%, 0);
    z-index: 499;
    @include mixins.interface-type-sm;
    .backdrop {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      backdrop-filter: blur(5px);
      border-radius: 30px;
    }
    .container {
      position: relative;
      display: flex;
      justify-content: center;
      position: relative;
      background-color: var(--color-text-translucent);
      box-shadow: var(--shadow-nav);
      border-radius: 30px;
      overflow: hidden;
      height: 30px;
    }
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: functions.toRem(30px);
    gap: 0 functions.toRem(16px);
    padding: 0 functions.toRem(20px);
    width: 100%;
    a {
      color: var(--color-background-accent);
      text-decoration: none;
      transition: all .3s ease;
      border-radius: 2px;
      text-transform: lowercase;

      &.active, &:hover:not(.active) {
        color: var(--color-background);
      }

      &:focus-visible {
        outline: 0px;
        box-shadow: var(--shadow-focus-nav);
        text-decoration: none;
        color: var(--color-background);
      }
    }
  }

  .craft {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: functions.toRem(30px);
    width: 100%;

    .collapsed-menu {
      position: relative;
      font-size: 24px;
      line-height: 1;
      padding: 0 functions.toRem(12px);
      height: 18px;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: functions.toRem(6px);
        right: 0;
        width: 1px;
        height: 100%;
        background-color: var(--color-border-dark);
      }
    }
    
    .link {
      padding: 0 functions.toRem(6px) 0 functions.toRem(16px);
      .btn-content {
        gap: 16px;
  
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: functions.toRem(40px);
          text-align: center;
          background-color: var(--color-primary);
          height: functions.toRem(18px);
          border-radius: functions.toRem(18px);
        }
      }

    }
  }
</style>