export default defineNuxtConfig({
  ssr: false,
  // env: {
  //   SUPABASE_KEY: process.env.SUPABASE_KEY,
  //   SUPABASE_URL: process.env.SUPABASE_URL,
  // },
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
        { name: 'description', content: "Phisher administrator portal let's you manageme your Phisher software, see the latest features, add, delete or make changes for users, change a subscription plan or get help by our assistant." }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: 'https://kit.fontawesome.com/f6333c832d.js', defer: true, crossorigin:'anonymous' }
      ]
    }
  }
})
