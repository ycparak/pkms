<script lang="ts">
  import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
  import NavTab from './NavTab.svelte';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let links = [] as { href: string, title: string, date: string, button: string }[];
  export let tabActive = 0;

  let nav: HTMLElement;
  let tabOffsets = [] as number[];
  let tabActiveOffset = spring(0, { 
    stiffness: 0.09,
    damping: 0.87,
  });

  $: tabActiveOffset.set(tabOffsets[tabActive]);

  onMount(() => {
    calcTabOffsets();
    tabActiveOffset.set(tabOffsets[tabActive]);
  });

  /* 
  const slideCenter = index * $screenWidth + ($screenWidth / 2);
    const viewportCenter = $screenWidth / 2;
    const distanceFromCenter = Math.abs(viewportCenter - slideCenter);
    const scale = distanceFromCenter < $screenWidth / 2 ? 1.0 - (distanceFromCenter / ($screenWidth / 2)) * 0.08 : 0.45;
    springScale.set(scale < 0.45 ? 0.45 : scale);

    const scale = distanceFromCenter < $screenWidth / 2 ? 1.0 - (distanceFromCenter / ($screenWidth / 2)) * 0.08 : 0.45;
    springScale.set(scale < 0.45 ? 0.45 : scale);


    console.log(index, $springScale) */

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