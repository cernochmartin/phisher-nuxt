<script setup>
import { facturation } from '../components/content/facturation'

useHead({
  title: 'Phisher | Admin Portal: Facturation'
})
</script>
<template>
  <h2 class="text-4xl">Facturation</h2>
  <div class="flex items-center justify-center gap-32 h-full">
    <FacturationCard v-for="item in facturation" :key="item.heading" v-bind="item" />
  </div>
</template>