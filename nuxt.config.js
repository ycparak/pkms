
export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Yusuf C Parak (@ycpso)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/fonts/fonts.css',
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
    '@nuxtjs/moment',
    '@nuxt/components',
    ['@nuxtjs/google-analytics', {
      id: 'UA-176258247-1'
    }]
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  /*
  ** Custom additions
  */
  styleResources: {
    scss: [
      '~assets/scss/partials/*.scss'
    ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxt/content',
    '@nuxtjs/feed',
    ['vue-scrollto/nuxt', { duration: 300 }]
  ],
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
  feed: [
    {
      path: '/feed.xml',
      async create(feed) {
        feed.options = {
          title: 'Yusuf C Parak (@ycpso)',
          description: "Yusuf C Parak's brain",
          link: process.env.NODE_ENV === 'production' ? 'https://www.ycp.so/feed.xml' : 'localhost:3000/feed.xml'
        }

        // eslint-disable-next-line global-require
        const { $content } = require('@nuxt/content')
        const posts = await $content().fetch()

        posts.forEach((post) => {
          const url = process.env.NODE_ENV === 'production' ? `https://www.ycp.so/${post.slug}` : `localhost:3000/${post.slug}`
          feed.addItem({
            title: post.title,
            id: url,
            link: url,
            description: post.blurb,
            content: post.bodyPlainText
          })
        })
      },

      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    }
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const readingTime = require('reading-time')
        const { text } = readingTime(document.text)
        document.readingTime = text
        document.bodyPlainText = document.text
      }
    }
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  /*
  ** Custom additions
  */
  components: true,
  content: {
    liveEdit: false,
    markdown: {
      rehypePlugins: ['rehype-minify-whitespace']
    }
  }
}
