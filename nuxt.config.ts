import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
        class: 'dark'
      },
      title: 'ideidetsploshad - Platform Ide & Inspirasi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ideidetsploshad.info adalah platform berbagi ide, inspirasi, dan wawasan seputar teknologi, desain, gaya hidup, dan perjalanan. Temukan artikel berkualitas setiap hari.' },
        { name: 'keywords', content: 'blog, teknologi, desain, lifestyle, travel, artikel, inspirasi, ide' },
        { name: 'author', content: 'ideidetsploshad' },
        { property: 'og:site_name', content: 'ideidetsploshad' },
        { property: 'og:locale', content: 'id_ID' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Newsreader:wght@200;300;400;500;600;700;800&family=Noto+Sans:wght@400;500;700&display=swap' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  icon: {
    serverBundle: 'remote',
    clientBundle: {
      scan: true
    }
  },

  css: ['~/assets/css/main.css']
})
