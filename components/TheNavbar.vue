<template>
  <div class="navbar">
    <TheContainer>
      <div class="nav">
        <div class="navigation">
          <a
            href="/"
            class="link active"
            @mouseover="toggleTheme('home')"
            @mouseout="toggleTheme()">
            <span>home</span>
            <div class="dot dot-home"></div>
          </a>
          <a
            href="/10kmrr"
            class="link"
            @mouseover="toggleTheme('tenkmrr')"
            @mouseout="toggleTheme()">
            <span>10k mrr</span>
            <div class="dot dot-tenkmrr"></div>
          </a>
          <a
            href="/projects"
            class="link"
            @mouseover="toggleTheme('projects')"
            @mouseout="toggleTheme()">
            <span>projects</span>
            <div class="dot dot-projects"></div>
          </a>
          <a
            href="/essays"
            class="link"
            @mouseover="toggleTheme('essays')"
            @mouseout="toggleTheme()">
            <span>essays</span>
            <div class="dot dot-essays"></div>
          </a>
          <a
            href="/thoughts"
            class="link"
            @mouseover="toggleTheme('thoughts')"
            @mouseout="toggleTheme()">
            <span>thoughts</span>
            <div class="dot dot-thoughts"></div>
          </a>
        </div>
        <div class="social">
          <a target="_blank" href="https://twitter.com/ycparak">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="w-16 h-16 mr-16 fill-current">
              <title>Twitter icon</title>
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
          <a target="_blank" href="https://instagram.com/ycparak">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 2.881c4.275 0 4.781.019 6.462.094 1.563.069 2.406.331 2.969.55a4.952 4.952 0 0 1 1.837 1.194 5.015 5.015 0 0 1 1.2 1.838c.219.563.481 1.412.55 2.969.075 1.688.094 2.194.094 6.463s-.019 4.781-.094 6.463c-.069 1.563-.331 2.406-.55 2.969a4.94 4.94 0 0 1-1.194 1.837 5.02 5.02 0 0 1-1.837 1.2c-.563.219-1.413.481-2.969.55-1.688.075-2.194.094-6.463.094s-4.781-.019-6.463-.094c-1.563-.069-2.406-.331-2.969-.55a4.952 4.952 0 0 1-1.838-1.194 5.02 5.02 0 0 1-1.2-1.837c-.219-.563-.481-1.413-.55-2.969-.075-1.688-.094-2.194-.094-6.463s.019-4.781.094-6.463c.069-1.563.331-2.406.55-2.969a4.964 4.964 0 0 1 1.194-1.838 5.015 5.015 0 0 1 1.838-1.2c.563-.219 1.412-.481 2.969-.55 1.681-.075 2.188-.094 6.463-.094zM16 0c-4.344 0-4.887.019-6.594.094-1.7.075-2.869.35-3.881.744-1.056.412-1.95.956-2.837 1.85a7.833 7.833 0 0 0-1.85 2.831C.444 6.538.169 7.7.094 9.4.019 11.113 0 11.656 0 16s.019 4.887.094 6.594c.075 1.7.35 2.869.744 3.881.413 1.056.956 1.95 1.85 2.837a7.82 7.82 0 0 0 2.831 1.844c1.019.394 2.181.669 3.881.744 1.706.075 2.25.094 6.594.094s4.888-.019 6.594-.094c1.7-.075 2.869-.35 3.881-.744 1.05-.406 1.944-.956 2.831-1.844s1.438-1.781 1.844-2.831c.394-1.019.669-2.181.744-3.881.075-1.706.094-2.25.094-6.594s-.019-4.887-.094-6.594c-.075-1.7-.35-2.869-.744-3.881a7.506 7.506 0 0 0-1.831-2.844A7.82 7.82 0 0 0 26.482.843C25.463.449 24.301.174 22.601.099c-1.712-.081-2.256-.1-6.6-.1z" /><path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219A8.221 8.221 0 0 0 16 7.781zm0 13.55a5.331 5.331 0 1 1 0-10.663 5.331 5.331 0 0 1 0 10.663zM26.462 7.456a1.919 1.919 0 1 1-3.838 0 1.919 1.919 0 0 1 3.838 0z" /></svg>
          </a>
          <button
            class="darkmode-button"
            @click="darkModeToggle()"></button>
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
  methods: {
    toggleTheme(theme = null) {
      this.$emit('toggleTheme', theme)
    },
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

<style lang="scss">
.navbar {
  border-bottom: 1px solid var(--line);
  transition: all .3s ease-in-out;
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  @media (max-width: 768px) {
    height: 40px;
  }
}
.navigation {
  display: flex;
  align-items: center;
}
.link {
  display: flex;
  align-items: center;
  opacity: .3;
  margin-right: 24px;
  transition: all .3s ease;
  color: var(--text);
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  transition: all .3s ease-in-out;
  &.active, &:hover { opacity: 1; }
  :last-child { margin-right: 0; }
  @media (max-width: 768px) {
    margin-right: 12px;
  }
  span {
    display: block;
    margin-right: 4px;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transition: all .3s ease-in-out;
    &-home { background: var(--text); }
    &-tenkmrr { background: var(--tenkmrr); }
    &-projects { background: var(--projects); }
    &-essays { background: var(--essays); }
    &-thoughts { background: var(--thoughts); }
    @media (max-width: 768px) {
      display: none;
    }
  }
}

.social {
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    display: inline-block;
    margin-right: 20px;
    transition: all .3s ease-in-out;
    color: var(--text);
    &:hover { color: var(--subtle-text); }
    svg {
      width: 14px;
      height: 14px;
    }
  }
}

.darkmode-button {
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  top: -1px;
  transition: all .3s ease-in-out;
  box-shadow: var(--darkmode-shadow);
  position: relative;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  &::after {
    background-color: var(--text);
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    transform: translateX(var(--darkmode-translate));
    transition: all .3s ease-in-out;
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
