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
<header class="sidebar" data-sveltekit-noscroll>
  <Logo {depth} {pathname} />
  <Menu />
  <ThemePicker />
</header>

<!-- Main content -->
{#key pathname}
<main
  in:fly={{ x: transitionForward ? inX : -inX, easing: expoOut, duration: x / 2, delay: duration }}
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
.sidebar {
  background-color: var(--color-background);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-width: functions.toRem(204px);
  border-right: functions.toRem(1px) solid var(--color-line);
  z-index: 100;
  // Content
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
  
  @media (max-width: functions.toRem(1088px)) {
    pointer-events: none;
    transform: translateX(functions.toRem(-204px));
    max-width: 0;
  }
}

main {
  height: 100%;
}
</style>