<template>
  <Fragment>
    <a
      :href="`/${getLink}`"
      class="post"
      :class="`${classnames}`"
      @click.prevent="handleInterlink()">
      <div class="icon">
        <span class="icon-circle" />
      </div>
      <div class="content">
        <div class="content-title">{{ includedPost.title }}</div>
        <div class="content-meta">
          <span class="post-subtitle">{{ $moment(includedPost.updatedAt).format('DD.MM.YYYY') }}</span>
        </div>
      </div>
    </a>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import interLinks from '@/mixins/interLinks'

export default {
  name: 'Link',
  components: {
    Fragment
  },
  mixins: [interLinks],
  props: {
    includedPost: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: row;
  text-decoration: none !important;
  margin: 12px 0;
  cursor: pointer;
  &:first-child { margin-top: 0; }
  &:last-child { margin-bottom: 0; }

  .icon {
    position: relative;
    margin-right: 24px;
    &-circle {
      position: absolute;
      width: 11px;
      height: 11px;
      border: 1px solid var(--note-color);
      border-radius: 50%;
      top: 7px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    &-title {
      color: var(--text-color);
      font-weight: 500;
      line-height: 24px;
      font-size: 16px;
    }
    &-meta {
      position: relative;
      margin: 0;
      padding: 0;
      line-height: 27px;
      font-weight: 400;
      font-size: 14px;
      opacity: .7;
    }
  }

  &:hover, &.active {
    .icon .icon-circle {
      background-color: var(--note-color);
    }
  }
}
</style>
