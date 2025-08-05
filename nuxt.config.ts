import path from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  
  // build: {
  // extend(config ) {
  //   config.resolve.extensionAlias = {
  //     '.js': ['.js', '.cjs'],
  //     '.mjs': ['.mjs']
  //   }
  // }
  // },
  devtools: {
    enabled: true,
    
    timeline: {
      enabled: true
    }
  },
  app:{
    head: {
      title: 'FLOWER MARKET', 
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'icon', href: '/icon/mdi_flower-tulip-out.svg' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
    },
    
    // update Nuxt defaults
    pageTransition: { name: 'page', mode: 'out-in' }
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
  
 
  modules: ['@pinia/nuxt','@nuxt/image','nuxt-swiper',]
})