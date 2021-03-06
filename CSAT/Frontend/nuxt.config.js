module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'csat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'csat frontend' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Plugins setup
   */
  plugins: ['~plugins/buefy'],
  /**
   * Module config
   */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
  },
  /**
   * Axios config
   */
  axios: {
    // proxyHeaders: false
  }
}
