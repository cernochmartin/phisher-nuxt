<script setup>
import { facturation } from '../components/content/facturation'

definePageMeta({
  middleware: 'auth'
})

const user = useSupabaseUser()
onBeforeMount(() => {
  if (!user.value) {
    navigateTo('/')
  }
})

useHead({
  title: 'Phisher | Admin Portal: Facturation'
})
</script>
<template>
  <div class="flex gap-6 items-center text-2xl">
    <h2 class="text-4xl">Facturation</h2>
    <span>></span>
    <NuxtLink to="/facturation" class="underline">Change billing plan</NuxtLink>
    <span>></span>
    <NuxtLink to="/facturation" class="underline">Change subscription plan</NuxtLink>
  </div>
  <div class="flex items-center justify-center gap-32 h-full">
    <FacturationCard v-for="item in facturation" :key="item.heading" v-bind="item" />
  </div>
</template>