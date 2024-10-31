// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  app:{
    baseURL: '/nuxt-project/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  nitro:{
    plugins: ['plugins/extend-html.ts']
  },

  modules: ['@pinia/nuxt', '@nuxt/image']
})