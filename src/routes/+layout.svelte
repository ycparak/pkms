<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";
  import { fly } from 'svelte/transition'
	import { expoOut, expoIn } from 'svelte/easing'
  import { Logo, Menu, ThemePicker } from '$components'

  export let data;
  $: pathname = data.pathname;
  let prevPath = data.pathname;

  // Calculate fly transition x value and duration
  let screenWidth = 0;
  $: x = 768 + 204 + (screenWidth - 768 - 204) / 2;
  $: duration = x / 3 + 100;
  $: inX = (screenWidth - 768) / 2;

  // Calculate transition direction
  $: depth = pathname === '/' ? 0 : pathname.split('/').length - 1;
  let prevDepth = prevPath === '/' ? 0 : prevPath.split('/').length - 1;
  $: transitionForward = depth > prevDepth;
  const updatePrevDepth = () => {
    if (depth === 1)  prevDepth = 0;
    else {
      prevDepth = depth;
    }
  };
</script>

<!-- Large screen header -->
<header data-sveltekit-noscroll>
  <Logo />
  <Menu />
  <ThemePicker />
</header>

<!-- Main content -->
{#key pathname}
<main
  in:fly={{ x: transitionForward ? inX : -inX, easing: expoOut, duration: x - inX, delay: duration }}
  out:fly={{ x: transitionForward ? -x : x, easing: expoIn, duration, delay: 0 }}
  on:outroend={() => window.scrollTo(0, 0)}
  on:introstart={updatePrevDepth}
  data-sveltekit-noscroll>
  <slot />
</main>
{/key}

<!-- Small screen footer -->

<!-- Get window size -->
<svelte:window bind:innerWidth={screenWidth} />

<style lang="scss">
  header {
    background-color: var(--color-background);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    max-width: functions.toRem(204px);
    padding: functions.toRem(24px);
    border-right: functions.toRem(1px) solid var(--color-line);
    z-index: 100;
    // Content
    display: flex;
    flex-direction: column;
    gap: var(--spacer-lg);
    overflow-y: auto;
    transition: all 0.3s ease-in-out;
    @media (max-width: functions.toRem(768px)) {
      pointer-events: none;
      transform: translateX(functions.toRem(-204px));
      max-width: 0;
    }
  }

  main {
    position: relative;
    display: grid;
    grid-template-columns: [full-start] 1fr [main-start content-start] functions.toRem(28px) [body-start] functions.toRem(432px) [body-end] functions.toRem(28px) [content-end] functions.toRem(28px) [aside-start] functions.toRem(280px) [aside-end main-end] functions.toRem(28px) 1fr [full-end];
    height: fit-content;
    padding: functions.toRem(124px) 0;
    font-size: functions.toRem(15.3203px);
    width: 100%;
    max-width: calc(100% - functions.toRem(204px));
    transform: translateX(functions.toRem(204px));
    transition: all 0.3s ease-in-out;
    @media (max-width: functions.toRem(768px)) {
      max-width: 100%;
      transform: translateX(0);
    }
  }
</style>