<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";
  import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

  let screenWidth = 0;
  let tabActiveIndex = 0;
  let tabOffsets = [] as number[];
  let tabActiveOffset = spring(0, { 
    stiffness: 0.05,
    damping: 0.4,
  });

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
    tabActiveIndex = index;
    tabActiveOffset.set(tabOffsets[index]);
  }

  const links = [
    { href: 'link-preview', title: 'Link Preview' },
    { href: 'table-of-contents', title: 'Table of Contents' },
    { href: 'bionic-reading', title: 'Bionic Reading' },
    { href: 'radial-menu', title: 'Radial Menu' },
    { href: 'color-picker', title: 'Colour Picker' },
    { href: 'boolean-search', title: 'Boolean Search' },
    { href: 'magnified-doc', title: 'Magnified Doc' },
    { href: 'animated-counter', title: 'Animated Counter' },
    { href: 'craft-slider', title: 'Craft Slider' },
  ]
</script>

<div class="outer">
  <div class="inner">
    <svg class="noise">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </svg>
  </div>
</div>

<div class="contents">
  <nav style="transform: translateX({$tabActiveOffset}px);">
    {#each links as link, index}
      <a
        id="{index.toString()}"
        class:active={index === tabActiveIndex}
        href="#{link.href}"
        on:click|preventDefault={() => setActive(index)}
        tabindex="-1"
        draggable="false">
        {link.title}
      </a>
    {/each}
  </nav>
  <slot></slot>
</div>

<!-- Get window size -->
<svelte:window bind:innerWidth={screenWidth} />

<style lang="scss">
  .outer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #d9dae0;
  }
  .inner {
    position: fixed;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 8px;
    background-color: #f5f7f9;
    background: linear-gradient(180deg, #d9dae0 0%, #a0a0a2 100%);
    isolation: isolate;
  }

  .noise {
    position: fixed;
    z-index: -1;
    top: 10px;
    left: 10px;
    border-radius: 8px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    opacity: 0.3;
    filter: brightness(105%) contrast(105%);
  }

  .contents {
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 0;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.55) inset, 1.5px 1.5px 0px 0px rgba(0, 0, 0, 0.35) inset, -1.25px -1.25px 2px 0px rgba(0, 0, 0, 0.34) inset, -1px -1px 2px 0px rgba(255, 255, 255, 0.86) inset;
  }

  nav {
    position: relative;
    left: 50%;
    display: flex;
    list-style: none;
    overflow-x: hidden;
    white-space: nowrap;
    a {
      box-sizing: border-box;
      width: fit-content;
      padding: 20px 30px;
      margin: 0;
      font-size: 18px;
      cursor: default;
      color: #212329;
      opacity: 0.6;
      text-decoration: none;
      text-transform: lowercase;
      font-weight: 300;
      white-space: nowrap;
      transition: transform .2s ease-in-out;

      &.active {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
</style>