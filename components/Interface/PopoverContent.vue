<template>
  <div class="popover">
    <div class="popover-arrow" x-arrow />
    <div class="popover-content-box">
      <!-- <InterLink v-if="false" name="2" /> -->
      <div class="popover-content-title">
        {{ post.title }}
      </div>
      <div class="popover-content-body">
        <nuxt-content :document="post" class="popover" />
      </div>
    </div>
  </div>
</template>

<script>
// import InterLink from '@/components/Interface/InterLink'
export default {
  name: 'PopoverContent',
  components: {
    // InterLink
  },
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
  max-height: 400px;
  overflow-y: hidden;
}

.popover-content-title {
  padding: 12px 20px;
  padding-bottom: 0;
  font-weight: 700;
  font-size: 18px;
}

.popover-content-body {
  font-size: 14px;
}
</style>
