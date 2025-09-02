import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
  ],

  css: [
    '~/assets/css/variables.css',
    '~/assets/css/fonts.css',
    '~/assets/css/reset.css',
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
        { name: 'description', content: 'Página y blog de Miguel Manzano García' },
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

  experimental: {
    payloadExtraction: false
  },

  routeRules: {
    // Static page generated on-demand once
    '/**': { isr: true }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/es',
        '/en',
      ]
    }
  },

  typescript: {
    shim: false,
    strict: true
  },

  i18n: {
    detectBrowserLanguage: false,
    strategy: 'prefix',
    defaultLocale: 'en',
    langDir: 'internationalization',
    locales: [
      { code: 'en', iso: 'en', file: 'en.json', dir: 'ltr' },
      { code: 'es', iso: 'es', file: 'es.json', dir: 'ltr' },
    ]
  },

  devtools: {
    enabled: false
  }
})