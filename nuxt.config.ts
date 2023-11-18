// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Welcome to Nuxt',
      meta: [{ name: 'description', content: 'My awesome Nuxt project' }],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  css: ['@/assets/scss/main.scss'],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    'nuxt-headlessui',
    "@nuxt/image"
  ],
  eslint: {
    lintOnStart: false,
    formatter: 'visualstudio',
  },
  headlessui: {
    prefix: 'Headless',
  },
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 500, 600, 700],
    },
    download: true,
    base64: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    awsAmplify: {
      imageOptimization: { path: '/_amplify/image', cacheControl: 'public, max-age=3600, immutable' },
      imageSettings: {
        sizes: [100, 200, 1920],
        domains: ['images.unsplash.com'],
        remotePatterns: [],
        formats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: false,
      },
    },
  },
});