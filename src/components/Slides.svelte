<div
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

<style lang="scss">
  .slides {
    flex-grow: 1;
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
    display: grid;
    place-items: center;
    min-height: 100%;
    width: 100%;
    flex-shrink: 0;
    padding-bottom: 200px;
    .img {
      width: 768px;
      aspect-ratio: 16 / 9;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: rgba(0, 0, 0, 0.002) 0px 0.7px 0.7px, rgba(0, 0, 0, 0.005) 0px 1.9px 1.9px, rgba(0, 0, 0, 0.012) 0px 3.6px 3.6px, rgba(0, 0, 0, 0.02) 0px 6.3px 6.3px, rgba(0, 0, 0, 0.035) 0px 11px 11px, rgba(0, 0, 0, 0.1) 0px 20.2px 20.2px, rgba(0, 0, 0, 0.125) 0px 40px 40px;
    }
  }
</style>