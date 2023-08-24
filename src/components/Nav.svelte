<script lang="ts">
  import NavTab from './NavTab.svelte';
	import { spring } from 'svelte/motion';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let links = [] as { href: string, title: string, date: string, button: string }[];
  export let tabActive = 0;

  let navEl: HTMLElement;
  let tabOffsets = [] as number[];
  let tabActiveOffset = spring(0, { 
    stiffness: 0.09,
    damping: 0.87,
  });

  $: calcTabOffsets(navEl);
  $: tabActiveOffset.set(tabOffsets[tabActive]);


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

  function setActive(index : number) {
    dispatch('setActiveTab', index);
  }
</script>

<nav bind:this={navEl} style="transform: translate3d({$tabActiveOffset}px, 0px, 0px)">
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