<script lang="ts">
  import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
  import NavTab from './NavTab.svelte';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let links = [] as { href: string, title: string, date: string }[];
  export let tabActive = 0;
  export let linkActive = links[tabActive];

  let tabOffsets = [] as number[];
  let tabActiveOffset = spring(0, { 
    stiffness: 0.045,
    damping: 0.4,
  });

  $: date = linkActive.date && new Date(linkActive.date).toLocaleDateString('en-GB', { month: 'numeric', year: 'numeric' }).split('/').join('.');

  onMount(() => {
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
    dispatch('setActiveTab', index);
    tabActiveOffset.set(tabOffsets[index]);
  }
</script>

<nav style="transform: translate3d({$tabActiveOffset}px, 0px, 0px);">
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
<div class="date">
  <time>{date}</time>
</div>

<style lang="scss">
  nav {
    position: relative;
    left: 50%;
    display: flex;
    list-style: none;
    overflow-x: hidden;
    white-space: nowrap;
    padding: 10px 0 0 0;
  }
  .date {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    time {
      font-size: 14.1px;
      font-weight: 300;
      font-variant-numeric: lining-nums tabular-nums;
      font-feature-settings: 'liga' off;
      text-align: center;
      line-height: 1;
      color: rgba(0, 0, 0, 0.4)
    }
  }
</style>