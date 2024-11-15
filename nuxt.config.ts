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
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    }
  },
  image: {
    presets: {
      cover: {
        modifiers: {
          fit: "cover",
          width: 327,
          height: 327,
          densities: "x1",
        },
      },
    },
  },


  modules: ['@pinia/nuxt', '@nuxt/image']
})