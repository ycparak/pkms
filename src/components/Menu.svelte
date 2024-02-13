<script lang="ts">
  import { runAnimation } from '$lib/stores';
  import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let path: string;

  let delay = 1200;
  let rootPath = '';

  $: delay = path === '/' ? 1200 : 200;
  $: rootPath = path.split('/')[1];
</script>

<div class="menu">
  {#if $runAnimation}
    <nav in:fly={{ delay, duration: 400, x: 0, y: -66, opacity: 0.5, easing: circOut }}>
      <a href="/" class:active={rootPath === '' || rootPath === 'craft'}>craft</a>
      <a href="/writing" class:active={rootPath === 'writing'}>writing</a>
      <a href="{path}" class:active={rootPath === 'about'} on:click={() => dispatch('showModal')}>about</a>
      <!-- <a target="_blank" href="mailto:yusuf.parak@gmail.com">email</a>
      <a target="_blank" href="https://twitter.com/ycparak">twitter</a> -->
    </nav>
  {/if}
</div>

<style lang="scss">
  .menu {
    transform: translate(-50%, 0);
    position: fixed;
    left: 50%;
    top: functions.toRem(24px);
    z-index: 499;
    @media screen and (max-width: 1512px){
      top: functions.toRem(20px);   
    }
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
      &:focus-within {
        outline: none;
        color: var(--color-text);
      }
    }
  }
</style>