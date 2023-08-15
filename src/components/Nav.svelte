<script lang="ts">
  import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
  import NavTab from './NavTab.svelte';

  export let links = [] as { href: string, title: string }[];

  let tabActive = 0;
  let tabOffsets = [] as number[];
  let tabOpacities = [] as number[];
  let tabActiveOffset = spring(0, { 
    stiffness: 0.045,
    damping: 0.4,
  });

  $: if($tabActiveOffset) {
    tabOpacities = tabOffsets.map((offset) => {
      const distance = Math.abs(offset - $tabActiveOffset);
      const opacity = distance < 100 ? 1.0 - (distance / 100) * 0.35 : 0.35;
      return opacity;
    });
  }

  onMount(() => {
    tabActive = 0;
    calcTabOffsets();
    tabActiveOffset.set(tabOffsets[0]);
  });

  function calcTabOffsets() {
    const tabs = document.querySelectorAll('nav a');
    tabOffsets = Array.from(tabs).map((tab) => {
      const tabWidth = tab.getBoundingClientRect().width;
      const prevTabsWidth = Array.from(tabs).slice(0, Array.from(tabs).indexOf(tab)).reduce((acc, curr) => acc + curr.getBoundingClientRect().width, 0);
      return -(prevTabsWidth + (tabWidth / 2));
    });
  }

  function setActive(index : number) {
    tabActive = index;
    tabActiveOffset.set(tabOffsets[index]);
  }
</script>

<nav style="transform: translate3d({$tabActiveOffset}px, 0px, 0px);">
  {#each links as link, index}
    <NavTab
      index={index}
      active={index === tabActive}
      href={link.href}
      title={link.title}
      opacity={tabOpacities[index]}
      on:setActive={() => setActive(index)}
    />
  {/each}
</nav>

<style lang="scss">
  nav {
    position: relative;
    left: 50%;
    display: flex;
    list-style: none;
    overflow-x: hidden;
    white-space: nowrap;
  }
</style>