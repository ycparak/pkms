<script lang="ts">
  import NavTab from './NavTab.svelte';
	import { spring } from 'svelte/motion';
  import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

  export let links = [] as { href: string, title: string, date: string, button: string }[];
  export let tabActive = 0;

  let nav: HTMLElement;
  let firstPos = -72.5390625;
  let tabOffsets = [firstPos] as number[];
  let xPosNav = spring(firstPos, { 
    stiffness: 0.075,
    damping: 0.8,
    precision: 0,
  });

  $: xPosNav.set(tabOffsets[tabActive]);

  onMount(() => {
    calcTabOffsets(nav);
  })

  async function calcTabOffsets(nav : HTMLElement) {
    if (!nav) return;
    
    let tabs = Array.from(nav.children);
    let tabWidths = [140.71875] as number[];
    let tabWidthsCumulative = [140.71875] as number[];
    
    tabs.forEach((tab, i) => {
      tabWidths[i] = tab.getBoundingClientRect().width;
      tabWidthsCumulative[i] = tabWidths[i] + (tabWidthsCumulative[i - 1] || 0);
      tabOffsets[i] = -(tabWidthsCumulative[i] - (tabWidths[i] / 2));
    });
    console.log(tabOffsets)
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
    position: relative;
    left: 50%;
    display: flex;
    list-style: none;
    white-space: nowrap;
    padding: 12px 0 0 0;
    margin: 0;
    z-index: 97;
    will-change: transform;
  }
</style>