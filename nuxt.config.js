export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'new-nuxt-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { rel:"preconnect",href:"https://fonts.gstatic.com"},
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },     
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href:"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",rel:"stylesheet"},
      {
        href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css",rel:"stylesheet"    
      }
    ]
  },
   
  loading: {
    color: 'blue',
    height: '5px'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      "@/node_modules/bootstrap/dist/css/bootstrap.min.css",
  ],
  axios: {
    credentials: true,
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components:true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/dotenv']
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
