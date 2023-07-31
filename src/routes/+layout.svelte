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
  <!-- < Tablet screen header -->
  <header>
    <h1>
      <a href="/">
        Yusuf Parak<br>
        <span>Design Engineer</span>
      </a>
    </h1>
  </header>
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
    position: relative;
    display: grid;
    grid-template-columns: [full-start] minmax(functions.toRem(28px), 1fr) [main-start content-start] functions.toRem(28px) [body-start] functions.toRem(432px) [body-end] functions.toRem(28px) [content-end] functions.toRem(28px) [aside-start] functions.toRem(280px) [aside-end main-end] functions.toRem(28px) [toc-start] minmax(functions.toRem(28px), 1fr) [toc-end full-end];
    height: fit-content;
    padding: functions.toRem(124px) 0;
    font-size: functions.toRem(15.3203px);
    width: 100%;
    max-width: calc(100% - functions.toRem(204px));
    transform: translateX(functions.toRem(204px));
    transition: all 0.3s ease-in-out;
    z-index: 50;
    background-color: var(--color-background);
    header { display: none; }
    @media (max-width: functions.toRem(1088px)) {
      max-width: 100%;
      transform: translateX(0);
      padding-top: var(--spacer-lg);
      header { 
        display: block;
        grid-column: body-start;
        margin-bottom: var(--spacer-lg);
        
        h1 {
          @include mixins.lh-trim-logo;
          a { color: var(--color-text-dark);}
          span { color: var(--color-text-light);}
        }
      }
    }
    @media (max-width: functions.toRem(880px)) {
      grid-template-columns: [full-start] minmax(functions.toRem(28px), 1fr) [main-start content-start body-start aside-start] functions.toRem(432px) [main-end content-end body-end aside-end] minmax(functions.toRem(28px), 1fr) [full-end];
    }
    @media (max-width: functions.toRem(488px)) {
      display: block;
      padding-left: functions.toRem(24px);
      padding-right: functions.toRem(24px);
      header { margin-bottom: calc(var(--spacer-lg) * 2); }
    }
  }
</style>