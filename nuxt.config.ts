export default defineNuxtConfig({
  ssr: false,
  // env: {
  //   SUPABASE_KEY: process.env.SUPABASE_KEY,
  //   SUPABASE_URL: process.env.SUPABASE_URL,
  // },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Phisher admin portal.' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: 'https://kit.fontawesome.com/f6333c832d.js', defer: true, crossorigin:'anonymous' }
      ]
    }
  }
})
