import path from 'path'
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
    ssr: {
      external: ["@prisma/client"]
    },
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    }
  },

  image: {
    dir: path.join(process.cwd(), '../public'),
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

  prisma: {
    installCLI: true,
    installClient: true,
    generateClient: true,
    installStudio: false,
    autoSetupPrisma: true
  },

  modules: ['@pinia/nuxt','@nuxt/image','nuxt-swiper','@prisma/nuxt',]
})