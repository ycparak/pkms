<script lang="ts">
  import NavTab from './NavTab.svelte';
	import { spring } from 'svelte/motion';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let links = [] as { href: string, title: string, date: string, button: string }[];
  export let tabActive = 0;

  let nav: HTMLElement;
  let tabOffsets = [] as number[];
  let xPosNav = spring(0, { 
    stiffness: 0.075,
    damping: 0.8,
    precision: 0,
  });

  $: calcTabOffsets(nav);
  $: xPosNav.set(tabOffsets[tabActive]);


  function calcTabOffsets(nav : HTMLElement) {
    if (!nav) return;

    let tabWidths = [] as number[];
    let tabWidthsCumulative = [] as number[];
    let tabs = Array.from(nav.children);
    
    tabs.forEach((tabs, i) => {
      tabWidths[i] = tabs.getBoundingClientRect().width;
      tabWidthsCumulative[i] = tabWidths[i] + (tabWidthsCumulative[i - 1] || 0);
      tabOffsets[i] = -(tabWidthsCumulative[i] - (tabWidths[i] / 2));
    });
  }
</script>

<nav bind:this={nav} style="transform: translate3d({$xPosNav}px, 0px, 0px)">
  {#each links as link, index}
    <NavTab
      active={index === tabActive}
      href={link.href}
      title={link.title}
      tabOffset={tabOffsets[index]}
      tabActiveOffset={$xPosNav}
      on:setActive={() => dispatch('setActiveIndex', index)}
    />
  {/each}
</nav>

<style lang="scss">
  nav {
    position: absolute;
    left: 50%;
    display: flex;
    list-style: none;
    overflow: hidden;
    white-space: nowrap;
    padding: 25px 0 0 0;
    width: fit-content;
    z-index: 97;
  }
</style>