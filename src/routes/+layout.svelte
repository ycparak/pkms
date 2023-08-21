<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";
  import { Nav } from '$components'

  const links = [
    { date: '2023-08-16', href: 'link-preview', title: 'Link Preview', button: 'View prototype ⏵' },
    { date: '2023-08-14', href: 'table-of-contents', title: 'Table of Contents', button: 'View essay ⏵' },
    { date: '2023-06-21', href: 'bionic-reading', title: 'Bionic Reading', button: 'View prototype ⏵' },
    { date: '2023-06-01', href: 'radial-menu', title: 'Radial Menu', button: 'View essay ⏵' },
    { date: '2023-02-15', href: 'color-picker', title: 'Colour Picker', button: 'View prototype ⏵' },
    { date: '2022-08-06', href: 'boolean-search', title: 'Boolean Search', button: 'View essay ⏵' },
    { date: '2022-02-12', href: 'magnified-doc', title: 'Magnified Doc', button: 'View prototype ⏵' },
    { date: '2021-12-16', href: 'animated-counter', title: 'Animated Counter', button: 'View essay ⏵' },
    { date: '2022-02-12', href: 'craft-slider', title: 'Craft Slider', button: 'View prototype ⏵' },
  ]

  let activeTab = 0;
  $: activeLink = links[activeTab];

  function setActiveTab(event : CustomEvent) {
    activeTab = event.detail;
  }
</script>

<svg class="noise">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"></feTurbulence>
    <feColorMatrix type="saturate" values="0"></feColorMatrix>
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)"></rect>
</svg>

<main>
<Nav
  links={links}
  tabActive={activeTab}
  linkActive={activeLink}
  on:setActiveTab={setActiveTab} />
<slot></slot>
</main>

<style lang="scss">
  .noise {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    filter: brightness(120%) contrast(120%);
  }

  main {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
</style>