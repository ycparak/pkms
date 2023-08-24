<script lang="ts">
  import * as config from '$lib/config'
	import { Nav, Slides } from '$components'

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
  let index = 0;

  function setActiveIndex(event : CustomEvent) {
    index = event.detail;
  }

  function keydown(event : KeyboardEvent) {
    if (event.key === 'ArrowRight' && index < links.length - 1) {
      index++;
    } else if (event.key === 'ArrowLeft' && index > 0) {
      index--;
    }
  }

  function keyup(event : KeyboardEvent) {
    console.log('keyup')
  }
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<Nav
  links={links}
  tabActive={index}
  on:setActiveTab={setActiveIndex} />

<Slides 
  slides={links} 
  slideIndex={index}
  on:setActiveIndex={setActiveIndex} />

{#if index !== 0}
<button
  on:click={() => index--}
  class="button-left button-primary button-icon">
  <div class="inner"><i class="icon ph-bold ph-arrow-left"></i></div>
</button>
{/if}

{#if index !== links.length - 1}
<button
  on:click={() => index++}
  class="button-right button-primary button-icon">
  <div class="inner"><i class="icon ph-bold ph-arrow-right"></i></div>
</button>
{/if}

<div class="fader left"></div>
<div class="fader right"></div>

<svelte:window on:keydown={keydown} on:keyup={keyup} />

<style lang="scss">
  .fader {
    position: fixed;
    top: 22px;
    width: 100px;
    height: 32px;
    pointer-events: none;
    z-index: 98;
    &.left {
      --start: calc(22px + 32px);
      --width: calc(var(--start) + 100px);
      width: var(--width);
      background: linear-gradient(to right, rgba(245, 243, 243, 1) var(--start), rgba(245, 243, 243, 0));
    }
    &.right {
      right: 0;
      background: linear-gradient(to left, rgba(245, 243, 243, 1), rgba(245, 243, 243, 0));
    }
  }

  .button-left {
    position: fixed;
    bottom: 22px;
    left: 22px;
  }
  .button-right {
    position: fixed;
    bottom: 22px;
    right: 22px;
  }
</style>