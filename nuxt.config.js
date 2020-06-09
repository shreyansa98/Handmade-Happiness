const URL ='http://localhost:8000'
const path = require("path");
export default {
  mode: 'spa',
  router: {
    base: process.env.NODE_ENV === 'production' ? '/hh/' : '/',
    routerNameSplitter: '/',
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/font-awesome/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/css/font-awesome/css/all.css' },
      { rel: 'stylesheet', href: '/css/default.css' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "~/plugins/localStorage.js", ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    baseURL : URL
  },
  server: {
    port: process.env.NODE_ENV === 'production' ? 8000 : 4000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  proxy: {
    "/api": URL
  },
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: URL
  //     }
  //   }
  // }
  // ,
  /*
  ** Build configuration
  */
 build: {
  /*
   ** You can extend webpack config here
   */
  publicPath: process.env.NODE_ENV === 'production' ? '/assets/' : '',
  extend(config, ctx) { },
  postcss: {
    preset: {
      features: {
        customProperties: false
      }
    }
  }
},

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            propertName: "token"
          },
          logout: true
        }
      }
    }
  }
}
