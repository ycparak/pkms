<section class="preview-lg">
  <img src="/images/graph-view.webp" alt="Canary incidents graph built with d3.js" />
</section>

<style lang="scss">
  section {
    display: grid;
    place-items: center;
    background-color: var(--color-card);
    border: 1px solid var(--color-border);
    padding: calc(var(--space-container-v) / 2);
    @media (min-width: 1224px) {
      padding: calc(var(--space-container-v) * 2);
    }
    @media (min-width: 1512px) {
      padding: calc(var(--space-container-v) * 5);
    }

    img {
      width: 100%;
      height: auto;
    }
  }
</style>