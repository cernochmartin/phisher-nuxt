export default defineNuxtConfig({
  ssr: false,
  // env: {
  //   SUPABASE_KEY: process.env.SUPABASE_KEY,
  //   SUPABASE_URL: process.env.SUPABASE_URL,
  // },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Phisher',
      meta: [],
      script: [
        { src: 'https://kit.fontawesome.com/f6333c832d.js', defer: true, crossorigin:'anonymous' }
      ]
    }
  }
})
