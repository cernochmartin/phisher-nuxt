export default defineNuxtConfig({
  ssr: false,
  // env: {
  //   SUPABASE_KEY: process.env.SUPABASE_KEY,
  //   SUPABASE_URL: process.env.SUPABASE_URL,
  // },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  app: {
    head: {
      title: 'Phisher | Admin center',
      meta: [],
      script: [
        { src: 'https://kit.fontawesome.com/f6333c832d.js', defer: true, crossorigin:'anonymous' }
      ]
    }
  }
})
