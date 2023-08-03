<script lang="ts">
  import { dragscroll } from '@svelte-put/dragscroll';

  function scrollIntoView(event: Event) {
    const target = (event.target as HTMLElement)?.getAttribute('href');
    if (!target) return;
    
    const el = document.querySelector(target);
    if (!el) return;

    (el as HTMLElement).scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>

<div class="grid">
  <nav>
    <a draggable="false" href="#slide-1" class="active" on:click|preventDefault={scrollIntoView}>Link Preview</a>
    <a draggable="false" href="#slide-2" on:click|preventDefault={scrollIntoView}>Table of Contents</a>
    <a draggable="false" href="#slide-3" on:click|preventDefault={scrollIntoView}>Bionic Reading</a>
    <a draggable="false" href="#slide-4" on:click|preventDefault={scrollIntoView}>Radial Menu</a>
    <a draggable="false" href="#slide-5" on:click|preventDefault={scrollIntoView}>Colour Picker</a>
    <a draggable="false" href="#slide-6" on:click|preventDefault={scrollIntoView}>Boolean Search</a>
    <a draggable="false" href="#slide-7" on:click|preventDefault={scrollIntoView}>Magnified Doc</a>
    <a draggable="false" href="#slide-8" on:click|preventDefault={scrollIntoView}>Animated Counter</a>
    <a draggable="false" href="#slide-9" on:click|preventDefault={scrollIntoView}>Craft Slider</a>
  </nav>
  <div
    use:dragscroll={{ axis: 'x' }}
    class="slides">
    <div id="slide-1" class="slide">
      <div class="img"></div>
    </div>
    <div id="slide-2" class="slide">
      <div class="img"></div>
    </div>
    <div id="slide-3" class="slide">
      <div class="img"></div>
    </div>
    <div id="slide-4" class="slide">
      <div class="img"></div>
    </div>
    <div id="slide-5" class="slide">
      <div class="img"></div>
    </div>
    <div id="slide-6" class="slide">
      <div class="img"></div>
    </div>
    <div id="slide-7" class="slide">
      <div class="img"></div>
    </div>
    <div id="slide-8" class="slide">
      <div class="img"></div>
    </div>
    <div id="slide-9" class="slide">
      <div class="img"></div>
    </div>
    <div id="slide-10" class="slide">
      <div class="img"></div>
    </div>
  </div>
</div>

<style lang="scss">
  .grid {
    grid-template-rows: auto 1fr;
    padding-bottom: 0;
  }
  nav {
    grid-column: body-start / full-end;
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    text-align: center;
    margin: 0 functions.toRem(-24px);
    height: fit-content;
    margin-top: functions.toRem(-8px);
    a {
      padding: functions.toRem(8px) functions.toRem(24px);
      white-space: nowrap;
      @include mixins.lh-trim-p;
      height: fit-content;
      color: var(--color-text-dark);
      opacity: 0.35;
      &.active { opacity: 1; }
    }
  }
  
  .slides {
    grid-column: full;
    flex-grow: 1;
    padding: calc(var(--spacer-lg) - functions.toRem(8px)) 0 functions.toRem(124px) 0;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    user-select: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .slide {
    width: 100%;
    flex-shrink: 0;
    .img {
      width: 768px;
      aspect-ratio: 16 / 9;
      margin: 0 auto;
      background-color: var(--color-background-accent);
      border-radius: 12px;
      border: 1px solid var(--color-line);
    }
  }
</style>