<script lang="ts">
  import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
  import NavTab from './NavTab.svelte';
  // import Button from './Button.svelte';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let links = [] as { href: string, title: string, date: string, button: string }[];
  export let tabActive = 0;
  // export let linkActive = links[tabActive];

  let nav: HTMLElement;
  let tabOffsets = [] as number[];
  let tabActiveOffset = spring(0, { 
    stiffness: 0.03,
    damping: 0.27,
  });

  // $: date = linkActive.date && new Date(linkActive.date).toLocaleDateString('en-GB', { month: 'numeric', year: 'numeric' }).split('/').join('.');
  // $: button = linkActive.button && linkActive.button;

  onMount(() => {
    calcTabOffsets();
    tabActiveOffset.set(tabOffsets[0]);
  });

  function calcTabOffsets() {
    let tabs = nav.children;
    tabOffsets = Array.from(tabs).map((tab) => {
      const tabWidth = tab.getBoundingClientRect().width;
      const prevTabsWidth = Array.from(tabs).slice(0, Array.from(tabs).indexOf(tab)).reduce((acc, curr) => acc + curr.getBoundingClientRect().width, 0);
      return -(prevTabsWidth + (tabWidth / 2));
    });
  }

  function setActive(index : number) {
    dispatch('setActiveTab', index);
    tabActiveOffset.set(tabOffsets[index]);
  }
</script>

<nav bind:this={nav} style="transform: translate3d({$tabActiveOffset}px, 0px, 0px);">
  {#each links as link, index}
    <NavTab
      active={index === tabActive}
      href={link.href}
      title={link.title}
      tabOffset={tabOffsets[index]}
      tabActiveOffset={$tabActiveOffset}
      on:setActive={() => setActive(index)}
    />
  {/each}
</nav>
<!-- <header>
  <hgroup>
    <time>{date}</time>
    <Button>{button}</Button>
  </hgroup>
</header> -->

<style lang="scss">
  nav {
    position: relative;
    left: 50%;
    display: flex;
    list-style: none;
    overflow: hidden;
    white-space: nowrap;
    padding: 25px 0 0 0;
    width: fit-content;
  }

  /* hgroup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
    time {
      margin: 0 auto;
      font-size: 14.1px;
      font-weight: 300;
      font-variant-numeric: lining-nums tabular-nums;
      font-feature-settings: 'liga' off;
      text-align: center;
      line-height: 1;
      color: rgba(0, 0, 0, 0.4);
      padding: 0;
      margin-bottom: 30px;
    }
  } */


</style>