module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'csat',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'csat frontend'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: "stylesheet",
        href: "//fonts.googleapis.com/icon?family=Material+Icons"
      }
    ]
  },

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#FFD750'
  },
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
  /**
   * Stylesheet
   */
  css: [
    '~/assets/buefy.scss'
  ],
  /*
   ** Build configuration
   */
  build: {
     postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    loaders: [{
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1초
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1초
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  /**
   * Axios config
   */
  axios: {
    // proxyHeaders: false
  }
}