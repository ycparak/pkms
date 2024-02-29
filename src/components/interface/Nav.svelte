<script lang="ts">
  import { projectSlide } from '$lib/stores';
  import { blur, slide } from 'svelte/transition';
  import { backIn, backOut, sineIn } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { spring } from 'svelte/motion';
  import { clickOutside } from '$lib/functions';

  export let path: string;

  const aboutHeight = 284;
  const aboutWidth = 359;
  const aboutRadius = 26;
  let rootPath = '';
  let showAbout = false;
  let originalWidth = 0;
  let originalHeight = 0;
  let originalRadius = 30;

  const buttonBlur = tweened(5, {
    duration: $projectSlide.link ? 300 : 400,
    delay: $projectSlide.link ? 0 : 100,
    easing: $projectSlide.link ? backIn : backOut
  });
  const aboutSpring = spring({ height: aboutHeight, width: aboutWidth, radius: originalRadius }, {
    stiffness: 0.05,
    damping: 0.325,
    precision: 0.1
  });
  const aboutContent = spring({ opacity: 0, blur: 0 }, {
    stiffness: 0.2,
    damping: 0.4,
    precision: 0.1
  })

  $: rootPath = path.split('/')[1];
  $: if ($projectSlide.link) {
    $buttonBlur = 0;
  } else {
    $buttonBlur = 5;
  }

  function showAboutMode() {
    originalWidth = document.querySelector('.container')?.clientWidth || 0;
    originalHeight = document.querySelector('.container')?.clientHeight || 0;
    aboutContent.set({ opacity: 1, blur: 0 });
    aboutSpring.set({ width: originalWidth, height: originalHeight, radius: originalRadius }, { hard: true });
    showAbout = true;
    aboutSpring.set({ height: aboutHeight, width: aboutWidth, radius: aboutRadius });
  }

  function closeAboutMode() {
    aboutContent.set({ opacity: 0, blur: 5 });
    aboutSpring.set({ width: originalWidth, height: originalHeight, radius: originalRadius });
    setTimeout(() => {
      showAbout = false;
    }, 300);
  }

  
</script>

<div class="menu">
  <div class="backdrop" style="border-radius: {$aboutSpring.radius}px"></div>
  <div class="container" style="border-radius: {$aboutSpring.radius}px">
    {#if !showAbout}
      <div
        class="island"
        in:blur={{ delay: 0, duration: 400, amount: 5, easing: backOut }}>
        <nav>
          <a class="nav-link" href="/" class:active={rootPath === '' || rootPath === 'craft'} draggable="false" >craft</a>
          <a class="nav-link" href="/writing" class:active={rootPath === 'writing'} draggable="false" >writing</a>
          <button class="nav-link" on:click|stopPropagation={showAboutMode} draggable="false" >
            about
          </button>
        </nav>
        {#if $projectSlide.link && path === '/'}
          <div class="divider"></div>
          <a
            class="btn btn-none craft-link"
            in:slide={{ duration: 500, easing: backOut, axis: 'x' }}
            out:slide={{ duration: 400, easing: backIn, axis: 'x' }}
            href={$projectSlide.link}
            target={$projectSlide.linkIsExternal ? '_blank' : ''}>
            <div 
              class="btn-content"
              style="filter: blur({$buttonBlur}px);">
              <span>{$projectSlide.linkTitle}</span>
              <div class="icon">
                <i class="ph-bold { $projectSlide.linkIsExternal ? 'ph-arrow-up-right' : 'ph-arrow-right' }"></i>
              </div>
            </div>
          </a>
        {/if}
      </div>
    {:else}
      <div
        use:clickOutside={closeAboutMode}
        class="about"
        style="width: {$aboutSpring.width}px; height: {$aboutSpring.height}px; opacity: {$aboutContent.opacity}; filter: blur({$aboutContent.blur}px);">
        <p in:blur={{ delay: 150, duration: 200, amount: 5, easing: sineIn }}>
          Hey, I’m Yusuf. I’m a Product Designer and Interface Engineer; obsessed with crafting novel and useful software. Previously I created Pinched.io, a sourcing tool built on top of Twitter’s social graph, backed by Pioneer. Before that I worked at Thinkst, on Canary, a toolkit to detect attackers on internal networks.
        </p>
        <div
          in:blur={{ delay: 50, duration: 300, amount: 5, easing: sineIn }} 
          class="actions">
          <img src="/images/me.webp" alt="Yusuf Parak">
          <div class="social-links">
            <a class="nav-link" href="mailto:yusuf.parak@gmail.com" target="_blank" rel="noopener noreferrer">email</a>
            <a class="nav-link" href="https://twitter.com/ycparak" target="_blank" rel="noopener noreferrer">twitter</a>
            <a class="nav-link" href="https://github.com/ycparak/ycparak" target="_blank" rel="noopener noreferrer">github</a>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .menu {
    position: fixed;
    left: 50%;
    bottom: calc(var(--space-container) - 10px);
    transform: translate(-50%, 0);
    z-index: 499;
    user-select: none;
    @include mixins.interface-type-sm;
    .backdrop {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      backdrop-filter: blur(3px);
    }
    .container {
      position: relative;
      display: flex;
      justify-content: center;
      position: relative;
      background-color: var(--color-text-translucent);
      box-shadow: var(--shadow-sm);
      overflow: hidden;
      min-height: 30px;
    }

    .island {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .nav-link {
      all: unset;
      cursor: pointer;
      color: var(--color-background-accent);
      text-decoration: none;
      transition: all .3s ease;
      border-radius: 2px;
      text-transform: lowercase;
      user-select: none;
      padding: 2px 0;

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
  
  nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: functions.toRem(18px);
    gap: 0 functions.toRem(16px);
    padding: 0 functions.toRem(20px);
  }

  .divider {
    width: 1px;
    height: functions.toRem(18px);
    top: functions.toRem(6px);
    background-color: var(--color-border-dark);
    margin-right: functions.toRem(14px);
  }

  .craft-link {
    padding-left: functions.toRem(6px);
    margin-right: functions.toRem(6px) !important;
    background-color: transparent;
    height: fit-content;
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
        color: var(--color-background);
      }
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 0.5px var(--color-text-translucent), 0 0 0 2.5px var(--color-focus);
    }

    &:hover {
      color: var(--color-background);
    }
  }

  .about {
    position: relative;
    color: var(--color-background);
    p {
      position: absolute;
      top: 20px;
      left: 24px;
      width: 319px;
      @include mixins.interface-type-md;
      line-height: 1.55;
    }

    .actions {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 49px;
      padding: 0 24px;
      border-top: 1px solid var(--color-border-dark);
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      .social-links {
        @include mixins.interface-type-sm;
        display: flex;
        a {
          color: var(--color-background-accent);
          text-decoration: none;
          transition: all .3s ease;
          margin: 0 6px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>