<template>
  <div class="column">
    <div v-if="header && false" class="overflow-header">
      <span>{{ header }}</span>
    </div>
    <div v-if="header" class="column-header">
      <span>{{ header }}</span>
    </div>
    <div class="section">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    header: {
      type: String,
      required: false,
      default: null
    },
  },
  data() {
    return {
      scrollPos: null,
      showHeader: false,
    };
  },
  computed: {
    determineColumnWidth() {

    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  background: var(--background-color);
  box-shadow: var(--grid-column-shadow);
  scroll-snap-align: start;
  border: 1px solid var(--accent-color);
  border-radius: 12px;
  width: 100%;
  @include daynight;

  @media (min-width: 768px) {
    min-width: 560px;
    margin-right: 28px;
  }

  @media (max-width: 767px) {
    // min-width: 40s0px;
    min-width: calc(100vw - (28px * 3));
    margin-right: 16px;
  }

  .column-header {
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid var(--accent-color);
    padding: 6px 44px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    @media (max-width: 767px) {
      padding: 6px 24px;
    }
  }

  .overflow-header {
    display: block;
    position: fixed;
    writing-mode: vertical-lr;
    transform: translateX(508px);
    height: 100%;
    padding: 16px 4px;
    text-transform: capitalize;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    height: calc(100vh - 28px - 28px);
    border: 1px solid var(--accent-color);
    background: var(--background-color);
    z-index: 12;
  }
}
</style>