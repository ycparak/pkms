<template>
  <a
    class="button"
    href="https://ycparak.substack.com"
    target="_blank">
    <MailIcon class="icon-email" /> Subscribe to email list
  </a>
</template>

<script>
import { MailIcon, RssIcon, TwitterIcon } from 'vue-feather-icons'

export default {
  name: 'NewsletterForm',
  components: {
    MailIcon
  }
}
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  text-align: center;
  line-height: 31px;
  margin: 16px 0 28px 0;
  padding: 0 12px;
  font-size: 11px;
  color: var(--icon-color);
  background: var(--accent-color-1);
  border: 1px solid var(--newletter-submit-border);
  font-weight: 720;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 4px;
  text-decoration: none !important;
  outline: none;
  box-shadow: var(--tooltip-shadow);

  .icon-email {
    height: 14px;
    width: 14px;
    fill: transparent;
    stroke: var(--icon-color);
    position: relative;
    top: 3px;
    margin-right: 4px;
  }

  &:hover, &:focus, &:active {
    outline: none;
    box-shadow: none;
    background: var(--note-color);
    color: var(--background-color);
    transition: all .3s ease;
    .icon-email {
      transition: all .3s ease;
      stroke: var(--background-color);
    }
  }
}
</style>
