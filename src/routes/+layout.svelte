<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";
  import { Nav } from '$components'

  const links = [
    { date: '2023-08-16', href: 'link-preview', title: 'Link Preview' },
    { date: '2023-08-14', href: 'table-of-contents', title: 'Table of Contents' },
    { date: '2023-06-21', href: 'bionic-reading', title: 'Bionic Reading' },
    { date: '2023-06-01', href: 'radial-menu', title: 'Radial Menu' },
    { date: '2023-02-15', href: 'color-picker', title: 'Colour Picker' },
    { date: '2022-08-06', href: 'boolean-search', title: 'Boolean Search' },
    { date: '2022-02-12', href: 'magnified-doc', title: 'Magnified Doc' },
    { date: '2021-12-16', href: 'animated-counter', title: 'Animated Counter' },
    { date: '2020-9-11', href: 'craft-slider', title: 'Craft Slider' },
  ]

  let activeTab = 0;
  $: activeLink = links[activeTab];

  function setActiveTab(event : CustomEvent) {
    console.log(event.detail)
    activeTab = event.detail;
  }
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
  <Nav
    links={links}
    tabActive={activeTab}
    linkActive={activeLink}
    on:setActiveTab={setActiveTab} />
  <slot></slot>
  <div class="output">
    <!-- <pre>{tabOpacities}</pre> -->
  </div>
</div>

<style lang="scss">
  .outer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #D9DBE0;
  }
  .inner {
    position: fixed;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 8px;
    background-color: #f5f7f9;
    background: linear-gradient(180deg, #D4D4D9 0%, #A2A3A6 100%);
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
</style>