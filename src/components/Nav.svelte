<script lang="ts">
  import NavTab from './NavTab.svelte';
	import { spring } from 'svelte/motion';
  import { createEventDispatcher } from 'svelte';
  import type { Post } from '$lib/types'

	const dispatch = createEventDispatcher();

  export let links = [] as Post[];
  export let tabActive = 0;

  let nav: HTMLElement;
  let firstPos = -70;
  let date = links[tabActive].date;
  let tabOffsets = [firstPos] as number[];
  let xPosNav = spring(firstPos, { 
    stiffness: 0.075,
    damping: 0.8,
    precision: 0,
  });

  $: calcTabOffsets(nav);
  $: xPosNav.set(tabOffsets[tabActive]);
  $: setDate(tabActive)

  async function calcTabOffsets(nav : HTMLElement) {
    if (!nav) return;
    
    let tabs = Array.from(nav.children);
    let tabWidths = [140.71875] as number[];
    let tabWidthsCumulative = [140.71875] as number[];
    
    tabs.forEach((tab, i) => {
      tabWidths[i] = tab.getBoundingClientRect().width;
      tabWidthsCumulative[i] = tabWidths[i] + (tabWidthsCumulative[i - 1] || 0);
      let offset = -(tabWidthsCumulative[i] - (tabWidths[i] / 2));
      tabOffsets[i] = Math.round(offset);
    });
  }

  function setDate(tabActive : number) {
    const newDate = new Date(links[tabActive].date);
    // return date in the format mm.yyyy (e.g. 01.2021 ensuring that the month is always 2 digits)
    date = `${(newDate.getMonth() + 1).toString().padStart(2, '0')}.${newDate.getFullYear()}`;
  }
</script>

<header>
  <nav bind:this={nav} style="transform: translate3d({$xPosNav}px, 0px, 0px)">
    {#each links as link, index}
      <NavTab
        active={index === tabActive}
        href={link.slug}
        title={link.title}
        tabOffset={tabOffsets[index]}
        tabActiveOffset={$xPosNav}
        on:setActive={() => dispatch('setActiveIndex', index)}
      />
    {/each}
  </nav>
  <time>{date}</time>
</header>

<style lang="scss">
  header {
    height: fit-content;
    width: 100%;
    padding: functions.toRem(14px) 0;
    text-align: center;
    z-index: 97;
  }
  nav {
    position: relative;
    left: 50%;
    display: flex;
    white-space: nowrap;
    will-change: transform;
    backface-visibility: hidden;
  }
  time {
    display: block;
    font-size: functions.toRem(12px);
    opacity: 0.4;
    line-height: 1;
    letter-spacing: -0.01em;
    font-variant-numeric: tabular-nums;
    padding: functions.toRem(2px) 0 0 0;
    margin: 0;
    user-select: none;
  }
</style>