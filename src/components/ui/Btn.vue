<template>
  <button @click="click" :class="classNames">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    click: {
      type: Function,
      required: true
    },
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    classNames() {
      return `btn ${this.classes}`
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 0 8px;
  border-radius: var(--sm-border-radius);
  font-weight: 600;
  height: 32px;
  line-height: 32px;
  @include colors-inverted;
}
.sm {
  height: 28px;
}
.lg {
  height: 36px;
  line-height: 32px;
  font-size: 18px;
}
.xl {
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  font-size: 21px;
  font-weight: 600;
}
</style>
