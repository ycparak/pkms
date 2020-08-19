<template>
  <div class="social">
    <div class="container">
      <a href="https://ycparak.com/feed.xml" target="_blank" class="btn-social">
        <RssIcon class="icon icon-rss" />
      </a>
      <button
        class="btn-darkmode"
        @click="darkModeToggle()" />
    </div>
  </div>
</template>

<script>
import { RssIcon } from 'vue-feather-icons'

export default {
  name: 'NavbarControls',
  components: {
    RssIcon
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
.btn-darkmode {
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  overflow: hidden;
  transition-property: box-shadow;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  box-shadow: var(--icon-toggle-shadow);
  position: relative;
  top: -1px;
  margin: 0;
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

.social {
  color: var(--text-color);
  position: relative;
  pointer-events: visible;
  @include daynight;
  @media (max-width: 768px) {
    top: 0;
    right: -8px;
  }
}
.container {
  text-align: center;
}
.btn-social {
  display: block;
  margin: 4px 0;
  padding: 0;
  text-decoration: none;
  color: var(--text-color);
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: none;
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
  .icon-rss {
    width: 15px;
    height: 15px;
    fill: var(--text-color);
    stroke: var(--text-color);
  }
}
.btn-social:hover .icon-rss {
  fill: var(--neutral-color);
  stroke: var(--neutral-color);
}
</style>
