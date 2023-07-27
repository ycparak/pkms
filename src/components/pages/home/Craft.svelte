<h3>Craft</h3>
<div class="designs">
  <div class="design"></div>
  <div class="design"></div>
  <div class="design"></div>
  <div class="design"></div>
  <div class="design"></div>
  <div class="design"></div>
  <div class="design"></div>
  <div class="design"></div>
  <div class="design"></div>
  <div class="design"></div>
</div>
<div class="spacer-lg"></div>

<style lang="scss">
  .designs {
    grid-column: full-start / full-end;
    scroll-snap-type: x mandatory;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    overflow-x: auto;
    overflow-y: hidden;
    // margin-left: calc(-340px - 4px + 120px);
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .design {
      scroll-snap-align: start;
      background: var(--color-background-accent);
      width: 340px;
      height: 340px;
      min-width: 340px;
      min-height: 340px;
      margin-right: 4px;
    }
  }
</style>