<script lang="ts">
  import { projectSlide } from '$lib/stores';
  import { slide } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
	import { backOut, backIn } from 'svelte/easing';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // Props
  export let path: string;

  // State
  let rootPath = '';
  
  const buttonBlur = tweened(5, {
    duration: $projectSlide.link ? 300 : 400,
    delay: $projectSlide.link ? 0 : 100,
    easing: $projectSlide.link ? backIn : backOut
  });

  $: rootPath = path.split('/')[1];
  $: if ($projectSlide.link) {
    $buttonBlur = 0;
  } else {
    $buttonBlur = 5;
  }

</script>

<div class="menu">
  <div class="container">
    <div class="backdrop"></div>
    <nav>
      <a href="/" class:active={rootPath === ''}>home</a>
      <a href="/craft" class:active={rootPath === 'craft'}>craft</a>
      {#if $projectSlide.link}
        <a 
          in:slide={{ duration: 500, easing: backOut, axis: 'x' }}
          out:slide={{ duration: 400, easing: backIn, axis: 'x' }}
          href={$projectSlide.link}
          target={$projectSlide.linkIsExternal ? '_blank' : ''}
          class="btn">
          <div
            style="filter: blur({$buttonBlur}px);"
            class="btn-content">
            <span>{$projectSlide.linkTitle}</span>
            <i class="ph { $projectSlide.linkIsExternal ? 'ph-arrow-up-right' : 'ph-arrow-right' }"></i>
          </div>
        </a>
      {/if}
      <a href="/writing" class:active={rootPath === 'writing'}>writing</a>
      <a href="/#about" class:active={rootPath === 'about'} on:click={() => dispatch('showModal')}>about</a>
    </nav>
  </div>
</div>

<style lang="scss">
  .menu {
    position: fixed;
    bottom: var(--space-container);
    left: 50%;
    z-index: 499;
    bottom: calc(var(--space-container) - 11px);
    transform: translate(-50%, 0);
    border-radius: functions.toRem(32px);
    background-color: var(--color-background-translucent);
    overflow: hidden;
    @include mixins.interface-type-sm;
    .container {
      position: relative;
      padding: 0 functions.toRem(16px);
      @media (max-width: 767px) {
        padding: 0 functions.toRem(10px);
      }
    }

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      backdrop-filter: blur(16px);
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: functions.toRem(32px);
    width: 100%;
    a {
      color: var(--color-text-accent);
      text-decoration: none;
      transition: all .3s ease;
      border-radius: 2px;
      margin: 0 functions.toRem(16px);
      text-transform: lowercase;
      @media (max-width: 767px) {
        margin: 0 functions.toRem(10px);
      }

      &.active {
        position: relative;
        cursor: default;
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--color-text-accent);
        }
      }

      &:hover:not(.active) {
        color: var(--color-text);
      }

      &:focus-visible {
        outline: 0px;
        box-shadow: var(--shadow-focus);
        text-decoration: none;
        color: var(--color-text);
      }

      &.btn {
        border-radius: functions.toRem(28px);
      }
    }
  }
</style>