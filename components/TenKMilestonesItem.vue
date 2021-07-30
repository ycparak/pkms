<template>
  <div class="milestone-item" :class="{ complete: complete }">
    <div class="milestone-marker"></div>
    <div class="milestone-content">
      <div class="milestone-title">{{ title }}</div>
      <div class="tenk-var milestone-subtitle">
        {{ date }}
        <span v-if="complete" class="tick">&#10003;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: false,
      default: 'Date completed',
    },
    complete: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.milestone-item {
  display: flex;
  flex-direction: row;
  margin-left: -9px;
  padding-right: var(--margin);
  position: relative;
  padding-bottom: 28px;
  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 44px;
    position: absolute;
    left: 8px;
    top: -43px;
    z-index: -2;
    background: var(--line);
    background-image: linear-gradient(var(--text), var(--line));
    transition: all .1s ease-in-out;
  }
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: calc(100% - 4px);
    background: var(--line);
    position: absolute;
    z-index: -1;
    left: 8px;
    top: 6px;
    transition: all .1s ease-in-out;
  }
  .milestone-marker {
    margin-right: calc(var(--margin) - 9px);
    border: 1px solid var(--line);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    transition: all .1s ease-in-out;
    background: var(--background);
    color: var(--background);
    position: relative;
    top: 1px;
    font-size: 14px;
    text-align: center;
    font-weight: 700;
  }
  &.complete {
    &::before { display: none; }
    &::after { background: var(--text); }
    .milestone-marker {
      background: var(--text);
      border: 1px solid var(--line);
    }
    + .milestone-item {
      &::before { z-index: 1; }
    }
  }

  &:last-child { 
    padding-bottom: 8px;
    &::after {
      background: var(--line);
    }
  }
}
</style>
