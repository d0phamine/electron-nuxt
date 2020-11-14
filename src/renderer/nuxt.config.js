/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
  components: true,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js',
        }
      }
    },
  // mode: 'spa', // or 'universal'
  head: {
    title: 'electron-nuxt',
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [
    {ssr: true, src: '@/plugins/icons.js'},
    
  ],
  buildModules: [
    
  ],
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          
        },
     },
   },
 },
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs-extra/ant-design-vue',
  ],
          vuetify: {
            theme: {
              themes: {
                light: {
                  primary: '#1867c0',
                  secondary: '#b0bec5',
                  accent: '#8c9eff',
                  error: '#b71c1c',
                },
              },
            }
          }
};
