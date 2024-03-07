<script lang="ts">
  import { clickOutside } from '$lib/functions';

  export let isDarkMode = false;
  export let date : string;
  export let project : string;
  export let description : string;

  let descriptionIsVisible = false;
  let descriptionHeight = 0;

  function getDateYear(date: string) {
    return new Date(date).getFullYear();
  }
</script>

<div
  use:clickOutside={() => descriptionIsVisible = false }
  class="meta"
  class:dark={isDarkMode}
  style="transform: translateY({descriptionIsVisible ? -descriptionHeight : 0}px)">
  <div class="container">
    <button
      on:click={() => descriptionIsVisible = !descriptionIsVisible}
      class="btn btn-link"
      class:active={descriptionIsVisible}>
      <div class="icon"></div>
      <span>
        <time>{getDateYear(date)}</time>, {project}
      </span>
    </button>
    <div 
      class="description"
      class:active={descriptionIsVisible}
      bind:offsetHeight={descriptionHeight}>
      <p>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html description}
      </p>
    </div>
  </div>
</div>


<style lang="scss">
  .meta {
    left: var(--space-container-v);
    bottom: var(--space-container-v);
    .container {
      position: relative;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: fit-content;
    cursor: pointer;
    user-select: none;
    @include interface-type-sm;
    text-transform: none;

    .icon {
      background-color: var(--color-text-accent);
      width: toRem(5px);
      height: toRem(5px);
      border-radius: 50%;
      margin-right: toRem(8px);
      animation: flash 2s infinite;
      transition: all .5s ease;
    }
    
    time {
      letter-spacing: toRem(-0.8px);
      font-variant-numeric: tabular-nums;
    }

    &.active, &:hover, &:active {
      transition: all .5s ease;
      color: var(--color-text) !important;
      .icon {
        background-color: var(--color-text) !important;
        animation: none;
      }
    }

    &:focus-visible {
      box-shadow: var(--shadow-focus);
    }
  }

  .description {
    position: absolute;
    transition: all .4s ease;
    width: toRem(296px);
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    &.active {
      opacity: 1;
      pointer-events: all;
      visibility: visible;
    }
    
    p {
      @include interface-type-sm;
      line-height: 1.4;
      color: var(--color-text-accent);
      padding-top: toRem(8px);
      padding-left: toRem(13px);
      :global(a) {
        color: var(--color-text-accent);
        text-decoration: underline !important;
        text-decoration-color: var(--color-text-accent-underline) !important;
        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

</style>