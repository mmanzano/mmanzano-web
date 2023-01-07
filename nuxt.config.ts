import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],

  components: {
    dirs: [
      '~/components',
    ],
  },
  app: {
    // Global page headers: https://v3.nuxtjs.org/getting-started/seo-meta#defaults
    head: {
      title: 'mmanzano.com',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Página y blog de Miguel Manzano García' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },

  content: {
    markdown: {},
  },

  // config
  runtimeConfig: {
    public: {
      'blogIsVisible': (process.env.BLOG_IS_VISIBLE === 'true') || false,
    }
  },

  nitro: {
    prerender: {
      routes: [
        '/es/blog/articulo-no-encontrado',
        '/en',
        '/es',
      ]
    }
  },

  routeRules: {
    // Static page generated on-demand once
    '/**': { static: true },
  },

  typescript: {
    shim: false,
    strict: true
  },

  i18n: {
    strategy: 'prefix',
    detectBrowserLanguage: {
      fallbackLocale: 'es',
      alwaysRedirect: true,
      redirectOn: 'root'
    },
    langDir: 'internationalization',
    locales: [
      { code: 'es', iso: 'es', file: 'es.json', dir: 'ltr' },
      { code: 'en', iso: 'en', file: 'en.json', dir: 'ltr' },
    ],
    vueI18n: {
      legacy: false,
    }
  }
})
