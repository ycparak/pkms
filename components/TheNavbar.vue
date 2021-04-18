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
            href="/10kmrr"
            class="link"
            @mouseover="toggleTheme('tenkmrr')"
            @mouseout="toggleTheme()">
            <span>10k mrr</span>
            <div class="dot dot-tenkmrr"></div>
          </a>
        </div>
        <div class="social">
          <a href="https://twitter.com/ycparak">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="w-16 h-16 mr-16 fill-current">
              <title>Twitter icon</title>
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
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
  },
}
</script>

<style lang="scss">
.navbar {
  border-bottom: 1px solid var(--line);
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
    &-home { background: var(--text); }
    &-projects { background: var(--projects); }
    &-essays { background: var(--essays); }
    &-tenkmrr { background: var(--tenkmrr); }
    @media (max-width: 768px) {
      display: none;
    }
  }
}

.social {
  > a > svg {
    width: 14px;
    height: 14px;
    fill: var(--text);
    transition: all .3s ease;
    &:hover {
      fill: var(--subtle-color);
    }
  }
}
</style>
