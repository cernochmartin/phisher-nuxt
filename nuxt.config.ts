export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      supabaseKey: process.env.SUPABASE_KEY,
      supabaseUrl: process.env.SUPABASE_URL
    }
  },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Montserrat: [400]
    },
    display: 'swap'
  },
  app: {
    head: {
      meta: [
        { name: 'description', content: "Phisher administrator portal let's you manage your Phisher software, see the latest features, add, delete or make changes for users or change a subscription plan." }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: 'https://kit.fontawesome.com/f6333c832d.js', defer: true, crossorigin:'anonymous' }
      ]
    }
  }
})
