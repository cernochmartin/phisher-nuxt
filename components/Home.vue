<script setup lang="ts">

import { cards } from './cards'

// definePageMeta({
//   middleware: 'auth',
// })

</script>
<template>
  <div class="background">
    <div class="grid grid-cols-3 gap-10 pt-28">
      <Card v-for="item in cards" :key="item.heading" v-bind="item" />
    </div>
  </div>
</template>
<style scoped>
.background {
  background-image: url('../assets/icon/icon_home.svg');
  background-repeat: no-repeat;
}
</style>