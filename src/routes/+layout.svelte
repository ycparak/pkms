<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";

  // Calculate fly transition x value and duration
  let screenWidth = 0;
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
    right: 10px;
    bottom: 10px;
    border-radius: 10px;
    overflow-y: auto;
    z-index: 0;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.55) inset, 1.5px 1.5px 0px 0px rgba(0, 0, 0, 0.35) inset, -1.25px -1.25px 2px 0px rgba(0, 0, 0, 0.34) inset, -1px -1px 2px 0px rgba(255, 255, 255, 0.86) inset;
  }
</style>