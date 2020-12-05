<template>
  <div class="social">
    <button
      class="darkmode-button"
      @click="darkModeToggle()" />
    <a href="https://ycparak.com/feed.xml" target="_blank" class="btn-social">
      <img src="@/assets/icons/rss.svg" alt="rss" class="icon icon-rss" />
    </a>
    <a href="mailto:yusuf@ycparak.com" class="btn-social">
      <img src="@/assets/icons/mail.svg" alt="mail" class="icon icon-email" />
    </a>
    <a href="https://twitter.com/ycparak" target="_blank" class="btn-social">
      <img src="@/assets/icons/twitter.svg" alt="twitter" class="icon icon-twitter" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavbarSocial',
  methods: {
    darkModeToggle() {
      console.log('Hellow');
      /* if (this.$colorMode.value === 'dark') {
        this.$colorMode.preference = 'light';
        this.faviconLink = '/favicon.ico';
      } else {
        this.$colorMode.preference = 'dark';
        this.faviconLink = '/favicon_dark.ico';
      } */
    },
  },
};
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
    background-color: var(--icon-color);
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
    opacity: .5;
  }
  &:hover::after {
    background-color: var(--icon-color);
    opacity: .8;
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
    fill: var(--icon-color);
    width: 13px;
    height: 13px;
  }
  .icon-email {
    height: 14px;
    width: 14px;
    fill: transparent;
    stroke: var(--icon-color);
    @media (max-width: 768px) {
      position: relative;
      top: 1px;
    }
  }
  .icon-rss {
    width: 15px;
    height: 15px;
    stroke: var(--icon-color);
    fill: transparent;
  }
  .icon-twitter {
    width: 13px;
    height: 13px;
    fill: var(--icon-color);
    stroke: var(--icon-color);
  }
  &:hover .icon {
    @include daynight;
    opacity: .5;
  }
}
</style>
