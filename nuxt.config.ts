import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  components: {
    dirs: [
      '~/components',
    ],
  },
  title: 'mmanzano',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mmanzano',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  
  // Public config
  publicRuntimeConfig: {
    'blogIsVisible': process.env.BLOG_IS_VISIBLE || false,
  },

  // Private config
  privateRuntimeConfig: {},
  
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  typescript: {
    shim: false,
    strict: true
  },
})
