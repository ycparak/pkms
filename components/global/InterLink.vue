<template>
  <Fragment>
    <a
      ref="popoverReference"
      :href="getLink"
      class="interlink"
      :class="`${classnames}` "
      @click.prevent="handleInterlink()"
      @mouseover="handlePopover(true)"
      @mouseleave="handlePopover(false)">
      <slot>{{ post.title }}</slot>
    </a>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import VueScrollTo from 'vue-scrollto'

export default {
  name: 'Link',
  components: {
    Fragment
  },
  props: {
    href: {
      type: String,
      required: false,
      default: ''
    },
    spaceBefore: {
      type: String,
      required: false,
      default: 'true'
    },
    includedPost: {
      type: Object,
      required: false,
      default: null
    }
  },
  data() {
    return {
      post: {},
      popoverOptions: {
        popoverReference: null,
        placement: 'right',
        offset: [0, 8]
      }
    }
  },
  computed: {
    getLink() {
      if (this.includedPost) {
        return `/${this.includedPost.path}`
      }
      return `/${this.href}`
    },
    isActiveLink() {
      const slug = this.$route.params.slug
      const currentQueries = this.$route.query.col

      if (currentQueries === undefined) {
        return ''
      } else if (currentQueries === this.href || (currentQueries.includes(this.href) && typeof currentQueries !== 'string')) {
        return true
      } else if (this.href === this.$route.params.slug) {
        return true
      }
      return false
    },
    classnames() {
      let classes = ''
      if (this.isActiveLink) { classes = 'active' }
      if (this.spaceBefore) { classes = `${classes} space-before` }
      return classes
    }
  },
  async mounted() {
    if (this.includedPost) {
      this.post = this.includedPost
    } else {
      try {
        this.post = await this.$content(this.href).fetch()
      } catch (error) {
        console.log(error)
      }
    }
    this.popoverOptions.popoverReference = this.$refs.popoverReference
  },
  methods: {
    handleInterlink() {
      if (!this.isActiveLink) {
        this.handlePopover(false)

        let slug = this.$route.params.slug
        if (!slug) {
          slug = '/'
        }
        const currentQueries = this.$route.query.col

        let newQuery = this.href
        if (newQuery === slug) { return }

        if (currentQueries !== undefined) {
          if (newQuery === currentQueries || currentQueries.includes(this.href)) { return }
          newQuery = [].concat(currentQueries, this.href)
        }

        this.$router.push({ path: slug, query: { col: newQuery } })
      } else {
        this.scrollToLink()
      }
    },
    scrollToLink() {
      const cols = this.$store.getters['columns/getColumns']
      const index = cols.map(c => c.slug).indexOf(`/${this.href}`)
      const postIndex = cols.map(c => c.slug).indexOf(`/${this.post.slug}`)

      let offset = (index * -32) - 136
      if (index < postIndex) {
        offset = -2000
      }

      const options = {
        container: '#grid',
        easing: 'linear',
        offset,
        force: true,
        cancelable: true,
        x: true,
        y: false
      }
      VueScrollTo.scrollTo(`#column-${index}`, 350, options)
    },
    handlePopover(show) {
      const popover = {
        isPopoverVisible: show,
        post: this.post,
        popoverOptions: this.popoverOptions
      }
      this.$store.dispatch('columns/setPopover', popover)
    }
  }
}
</script>

<style lang="scss" scoped>
.interlink {
  text-decoration: none !important;
  font-weight: 600;
  color: var(--note-color);
  white-space: normal;
  margin: 0;
}
</style>
