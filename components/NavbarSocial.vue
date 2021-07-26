<template>
  <div class="social-nav">
    <a class="social-nav-link" target="_blank" href="https://twitter.com/ycparak">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true">
        <title>Twitter icon</title>
        <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
      </svg>
    </a>
    <button class="darkmode" @click="darkModeToggle()"></button>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    darkModeToggle() {
      if (this.$colorMode.value === 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.social-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 500px) {
    display: none;
  }
}
.social-nav-link {
  display: inline-block;
  margin-right: 16px;
  border-bottom: none;
  &:hover {
    border-bottom: none;
  }
  svg {
    width: 13px;
    height: 13px;
    position: relative;
    top: .5px;
    fill: var(--text);
    transition: all .1s ease-in-out;
  }
  &:hover svg {
    fill: var(--subtle-text);
  }
}
.darkmode {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--darkmode-shadow);
  position: relative;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  top: 1px;
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
  @media (max-width: 450px) {
    display: none;
  }
  &::after {
    background-color: var(--text);
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    transform: translateX(var(--darkmode-translate));
    transition: all .1s ease-in-out;
  }
  &:hover {
    box-shadow: var(--darkmode-shadow-hover);
    opacity: .5;
  }
  &:hover::after {
    background-color: var(--text);
    opacity: .8;
  }
}
</style>
