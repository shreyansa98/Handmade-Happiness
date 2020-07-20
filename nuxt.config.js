const URL ='https://handmadehappiness.herokuapp.com'
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
    // title: process.env.npm_package_name || '',
    title: 'Handmade Happiness',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.5.1.slim.min.js", integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj", crossorigin: "anonymous"},
      { src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo", crossorigin: "anonymous"},
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js", integrity: "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI", crossorigin: "anonymous"},
      {src: "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"}
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-vue/2.15.0/bootstrap-vue.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/fontawesome.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Exo:wght@500&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap'}
      
      // { rel: 'stylesheet', href: '/css/font-awesome/css/all.css' },
      // { rel: 'stylesheet', href: '/css/default.css' }
      // { rel: 'stylesheet', href: 'https://raw.githubusercontent.com/shreyansa98/hh/master/static/css/default.css' }
    ]
  },
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  /*
  ** Customize the progress-bar color
  */
 loading: {
  name: 'chasing-dots',
  color: '#752D75',
  background: 'white',
  height: '10px'
},
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
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: false,
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
