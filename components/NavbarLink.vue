<template>
  <NuxtLink
    :to="path ? path : text"
    class="nav-link"
    @mouseover.native="toggleTheme(`${classname ? classname : text}`)"
    @mouseout.native="toggleTheme()">
    <span>{{ text }}</span>
    <div :class="`dot dot-${classname ? classname : text}`"></div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'NavbarLink',
  props: {
    text: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: false,
      default: null,
    },
    classname: {
      type: String,
      required: false,
      default: null,
    },
  },
  methods: {
    toggleTheme(theme = null) {
      this.$root.$emit('toggleTheme', theme)
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
.nav-link {
  display: flex;
  align-items: center;
  margin-right: 24px;
  transition: all .3s ease;
  color: var(--subtle-text);
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  transition: all .3s ease-in-out;
  @media (max-width: 768px) {
    margin-right: 12px;
  }
  @media (max-width: 450px) {
    font-size: 13px;
    margin-right: 8px;
  }
  :last-child {
    margin-right: 0;
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
    opacity: .4;
    &-home { background: var(--text); }
    &-tenkmrr { background: var(--tenkmrr); }
    &-projects { background: var(--projects); }
    &-essays { background: var(--essays); }
    &-thoughts { background: var(--thoughts); }
    @media (max-width: 768px) {
      display: none;
    }
  }
  &.nuxt-link-exact-active, &:hover {
    color: var(--text);
    .dot {
      opacity: 1;
    }
  }
}
</style>
