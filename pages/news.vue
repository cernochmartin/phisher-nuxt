<script setup>
import { news } from '../components/content/news'

useHead({
  title: "Phisher | Admin Portal: What's new"
})
</script>
<template>
  <div class="flex gap-6 items-center text-2xl">
    <h2 class="text-4xl">What's new</h2>
    <span>></span>
    <NuxtLink to="https://github.com/cernochmartin/phisher-portal-nuxt" target="_blank" class="underline">See
      latest releases & features
    </NuxtLink>
  </div>
  <div class="grid grid-cols-3 gap-10 pt-20">
    <Card v-for="item in news" :key="item.heading" v-bind="item" />
  </div>
</template>