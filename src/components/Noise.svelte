<svg class="noise">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"></feTurbulence>
    <feColorMatrix type="saturate" values="0"></feColorMatrix>
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)"></rect>
</svg>

<style lang="scss">
  .noise {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    filter: brightness(120%) contrast(120%);
  }
</style>