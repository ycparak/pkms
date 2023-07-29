<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";
  import { fly } from 'svelte/transition'
	import { expoOut, expoIn } from 'svelte/easing'
  import { Logo, Menu, ThemePicker } from '$components'

  export let data;
  $: pathname = data.pathname;
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
  in:fly={{ x: 175, easing: expoOut, duration: 1500, delay: 500 }}
  out:fly={{ x: -2000, easing: expoIn, duration: 500 }}
  data-sveltekit-noscroll>
  <slot />
</main>
{/key}

<!-- Small screen footer -->

<style lang="scss">
  header {
    background-color: var(--color-background);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: functions.toRem(204px);
    padding: functions.toRem(24px);
    border-right: functions.toRem(1px) solid var(--color-line);
    z-index: 100;
    // Content
    display: flex;
    flex-direction: column;
    gap: var(--spacer-lg);
    overflow-y: auto;
    @media (max-width: functions.toRem(768px)) {
      display: none;
    }
  }

  main {
    position: relative;
    margin-left: functions.toRem(204px);
    display: grid;
    grid-template-columns: [full-start] 1fr [main-start content-start] functions.toRem(28px) [body-start] functions.toRem(432px) [body-end] functions.toRem(28px) [content-end] functions.toRem(28px) [aside-start] functions.toRem(280px) [aside-end main-end] functions.toRem(28px) 1fr [full-end];
    height: fit-content;
    padding: functions.toRem(124px) 0;
    font-size: functions.toRem(15.3203px);
  }
</style>