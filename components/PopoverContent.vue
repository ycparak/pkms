<template>
  <div class="popover">
    <div class="popover-content-box">
      <div class="popover-content-title">
        {{ post.title }}
      </div>
      <div class="popover-content-body">
        {{ post.abstract }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopoverContent',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  padding: 12px 16px 16px 16px;
}
.popover-content-title {
  padding-bottom: 0;
  font-weight: 700;
  font-size: 16px;
}
.popover-content-body {
  font-size: 14px;
}
</style>
