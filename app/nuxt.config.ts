// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: 'EzEval | Simple Project Evaluation Tools For Window Cleaners',
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/partytown',
    'nuxt-icon',
    '@sidebase/nuxt-auth'
  ],
  runtimeConfig: {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    public: {
      apiBase: '/api'
    }
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  partytown: {
    forward: ['dataLayer.push'],
  },
  app: {
    head: {
      script: [
        // Insert your Google Tag Manager Script here
        {
          src: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W48JKVS');`, async: true, type: 'text/partytown'
        },
      ],
    },
  },
});
