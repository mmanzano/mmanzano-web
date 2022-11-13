import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
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
  
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  typescript: {
    shim: false,
    strict: true
  },
})
