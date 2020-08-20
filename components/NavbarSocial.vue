<template>
  <div class="social">
    <button
      class="darkmode-button"
      @click="darkModeToggle()" />
    <a href="https://ycparak.com/feed.xml" target="_blank" class="btn-social">
      <RssIcon class="icon icon-rss" />
    </a>
    <a href="https://aemail.com/vw8" target="_blank" class="btn-social">
      <MailIcon class="icon icon-email" />
    </a>
    <a href="https://twitter.com/ycparak" target="_blank" class="btn-social">
      <TwitterIcon class="icon icon-twitter" />
    </a>
  </div>
</template>

<script>
import { MailIcon, RssIcon, TwitterIcon } from 'vue-feather-icons'

export default {
  name: 'NavbarSocial',
  components: {
    MailIcon,
    RssIcon,
    TwitterIcon
  },
  methods: {
    darkModeToggle() {
      if (this.$colorMode.value === 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.social {
  position: relative;
  pointer-events: visible;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 28px;
  @include daynight;
  @media (max-width: 768px) {
    flex-direction: row;
    width: auto;
    margin-right: -8px;
    top: 3px;
  }
}
.darkmode-button {
  @media (max-width: 768px) { display: none ; }
  display: block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--icon-toggle-shadow);
  position: relative;
  margin-bottom: 16px;
  @include daynight;
  &::after {
    background-color: var(--text-color);
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    transform: translateX(var(--darkmode-toggle-translate));
    @include daynight;
  }
  &:hover {
    box-shadow: var(--icon-toggle-shadow-hover);
  }
  &:hover::after {
    background-color: var(--neutral-color);
  }
}
.btn-social {
  display: block;
  text-decoration: none;
  color: var(--text-color);
  border-radius: 50%;
  background-color: none;
  height: 32px;
  width: 32px;
  &:first-child { margin-top: 0; }
  &:last-child { margin-bottom: 0; }
  &:hover, &:focus, &:active {
    outline: none;
    box-shadow: none;
  }

  // Icons
  .icon {
    fill: var(--text-color);
    width: 13px;
    height: 13px;
    @include daynight;
  }
  .icon-email {
    height: 14px;
    width: 14px;
    fill: transparent;
    stroke: var(--text-color);
    @media (max-width: 768px) {
      position: relative;
      top: 1px;
    }
  }
  .icon-rss {
    width: 15px;
    height: 15px;
    stroke: var(--text-color);
    fill: transparent;
  }
  .icon-twitter {
    width: 13px;
    height: 13px;
    fill: var(--text-color);
    stroke: var(--text-color);
  }
  &:hover .icon {
    fill: var(--neutral-color);
  }
  &:hover .icon-rss {
    fill: transparent;
    stroke: var(--neutral-color);
  }
  &:hover .icon-twitter {
    fill: var(--neutral-color);
    stroke: var(--neutral-color);
  }
  &:hover .icon-email {
    fill: transparent;
    stroke: var(--neutral-color);
  }
}
</style>
