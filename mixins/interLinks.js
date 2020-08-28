import VueScrollTo from 'vue-scrollto'

export default {
  data() {
    return {
      post: {},
      popoverOptions: {
        popoverReference: null,
        placement: 'right',
        offset: [0, 16]
      }
    }
  },
  computed: {
    getLink() {
      if (this.includedPost) {
        return this.includedPost.path.split('/')[1]
      }
      return this.href
    },
    isActiveLink() {
      const slug = this.$route.params.slug
      const currentQueries = this.$route.query.col

      if (currentQueries === undefined) {
        return ''
      } else if (currentQueries === this.getLink || (currentQueries.includes(this.getLink) && typeof currentQueries !== 'string')) {
        return true
      } else if (this.getLink === this.$route.params.slug) {
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
      const cols = this.$store.getters['columns/getColumns']
      if (cols.length >= 14) {
        this.$root.$emit('popOverloadModal')
      } else if (!this.isActiveLink) {
        this.handlePopover(false)

        let slug = this.$route.params.slug
        if (!slug) {
          slug = '/'
        }
        const currentQueries = this.$route.query.col

        let newQuery = this.getLink
        if (newQuery === slug) { return }

        if (currentQueries !== undefined) {
          if (newQuery === currentQueries || (currentQueries.includes(this.getLink))) { return }
          newQuery = [].concat(currentQueries, this.getLink)
        }

        this.$router.push({ path: slug, query: { col: newQuery } })
      } else {
        this.scrollToLink()
      }
    },
    scrollToLink() {
      const cols = this.$store.getters['columns/getColumns']
      const index = cols.map(c => c.slug).indexOf(`/${this.getLink}`)
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
