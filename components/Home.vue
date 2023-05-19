<script setup lang="ts">

import { info } from './content/info'

// definePageMeta({
//   middleware: 'auth',
// })

</script>
<template>
  <h2 class="text-4xl">Home</h2>
  <div class="grid grid-cols-3 gap-10 pt-20">
    <Card v-for="item in info" :key="item.heading" v-bind="item" />
  </div>
</template>