<!-- {#if $index !== 0}
<button
  on:click={() => index.set($index -= 1)}
  disabled={$index === 0}
  class="button-left button-primary button-icon">
  <div class="inner"><i class="icon ph-bold ph-arrow-left"></i></div>
</button>
{/if}
{#if $index !== items.length - 1}
<button
  on:click={() => index.set($index += 1)}
  disabled={$index === items.length - 1}
  class="button-right button-primary button-icon">
  <div class="inner"><i class="icon ph-bold ph-arrow-right"></i></div>
</button>
{/if} -->

<style lang="scss">
  /* .button-left {
    position: fixed;
    bottom: 22px;
    left: 22px;
  }
  .button-right {
    position: fixed;
    bottom: 22px;
    right: 22px;
  } */
</style>