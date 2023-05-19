<script setup lang="ts">

import { news } from './content/news'

// definePageMeta({
//   middleware: 'auth',
// })

</script>
<template>
  <h2 class="text-4xl">What's new</h2>
  <div class="grid grid-cols-3 gap-10 pt-20">
    <Card v-for="item in news" :key="item.heading" v-bind="item" />
  </div>
</template>