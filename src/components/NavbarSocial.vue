<template>
  <div class="social">
    <button
      class="darkmode-button"
      @click="toggleDarkMode" />
    <a href="https://ycparak.com/feed.xml" target="_blank" class="btn-social">
      <svg class="icon icon-rss" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
    </a>
    <a href="mailto:yusuf@ycparak.com" class="btn-social">
      <svg class="icon icon-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    </a>
    <a href="https://twitter.com/ycparak" target="_blank" class="btn-social">
      <svg class="icon icon-twitter" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M32 7.075c-1.175.525-2.444.875-3.769 1.031 1.356-.813 2.394-2.1 2.887-3.631-1.269.75-2.675 1.3-4.169 1.594C25.749 4.794 24.043 4 22.155 4c-3.625 0-6.563 2.938-6.563 6.563 0 .512.056 1.012.169 1.494-5.456-.275-10.294-2.888-13.531-6.862-.563.969-.887 2.1-.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-.031-2.087-.331-2.975-.819v.081c0 3.181 2.263 5.838 5.269 6.437-.55.15-1.131.231-1.731.231-.425 0-.831-.044-1.237-.119.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-.531 0-1.05-.031-1.569-.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-.287-.006-.569-.019-.85 1.281-.919 2.394-2.075 3.275-3.394z"></path></svg>
    </a>
  </div>
</template>

<script>
import darkMode from '@/composables/darkMode';

export default {
  name: 'NavbarSocial',
  setup() {
    const { toggleDarkMode } = darkMode();
    return { toggleDarkMode };
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
  background-color: var(--background-color);
  width: 13px;
  height: 13px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1.5px var(--heading-color);
  position: relative;
  margin-bottom: 16px;
  transition: all .4s ease-in-out;
  &::after {
    background-color: var(--heading-color);
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    transform: translateX(var(--darkmode-toggle-translate));
  }
  &:hover {
    box-shadow: inset 0px 0px 0px 1.5px var(--heading-color);
    opacity: .5;
  }
  &:hover::after {
    background-color: var(--heading-color);
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
    fill: var(--heading-color);
    width: 13px;
    height: 13px;
  }
  .icon-mail {
    fill: var(--background-color);
    stroke: var(--heading-color);
    width: 14px;
    height: 14px;
  }
  .icon-rss {
    stroke: var(--heading-color);
    fill: transparent;
    width: 15px;
    height: 15px;
  }
  .icon-twitter {
    fill: var(--heading-color);
    stroke: var(--heading-color);
  }
  &:hover .icon {
    @include daynight;
    opacity: .5;
  }
}
</style>
