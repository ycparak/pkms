<template>
  <NuxtLink
    :to="path ? path : link"
    class="nav-link">
    {{ text }}
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
  computed: {
    link() {
      // Return text with no spaces between words
      return this.text.replace(/\s+/g, '').toLowerCase();
    }
  }
}
</script>

<style lang="scss">
.nav-link {
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  margin-right: 32px;
  transition: all .1s ease-in-out;
  color: var(--subtle-text);
  text-decoration: none;
  @media (max-width: 768px) {
    margin-right: 24px;
  }
  @media (max-width: 400px) {
    margin-right: 16px;
  }
  @media (max-width: 374px) {
    margin-right: 10px;
  }
  :last-child {
    margin-right: 0;
  }
  &.nuxt-link-exact-active, &:hover {
    color: var(--text);
  }
}
</style>
