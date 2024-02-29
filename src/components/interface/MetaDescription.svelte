<script lang="ts">
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
  class="meta"
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
    position: fixed;
    left: var(--space-container);
    bottom: var(--space-container);
    z-index: 499;
    transition: all .4s ease;
    @media (max-width: 640px) {
      display: none;
      visibility: hidden;
    }
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
    @include mixins.interface-type-sm;
    @include mixins.text-invert;
    color: var(--color-text);

    .icon {
      background-color: var(--color-text);
      width: functions.toRem(5px);
      height: functions.toRem(5px);
      border-radius: 50%;
      margin-right: functions.toRem(8px);
      animation: flash 2s infinite;
      transition: all .5s ease;
    }
    
    time {
      letter-spacing: functions.toRem(-0.8px);
      font-variant-numeric: tabular-nums;
    }

    &.active, &:hover, &:active {
      transition: all .5s ease;
      color: var(--color-background) !important;
      .icon {
        background-color: var(--color-background) !important;
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
    width: functions.toRem(296px);
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    &.active {
      opacity: 1;
      pointer-events: all;
      visibility: visible;
    }
    
    p {
      @include mixins.interface-type-sm;
      @include mixins.text-invert;
      line-height: 1.4;
      color: var(--color-text);
      padding-top: functions.toRem(8px);
      padding-left: functions.toRem(13px);
      :global(a) {
        color: var(--color-text);
        text-decoration: underline !important;
        text-decoration-color: rgba(0, 0, 0, 0.55) !important;
        &:hover {
          color: var(--color-background);
        }
      }
    }
  }

</style>