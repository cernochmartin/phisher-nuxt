<script setup lang="ts">
import { supabase } from "../components/supabase"

const signOut = async () => {
  let { error } = await supabase.auth.signOut()
  navigateTo('/')
}
</script>
<template>
  <nav class="navbar w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-6 pl-6 text-white">
    <NuxtLink to="/home">
      <h1 class="text-xl">Phisher Administration Portal</h1>
    </NuxtLink>
    <button @click="signOut()" class="text-lg">Sign Out</button>
  </nav>
</template>
<style scoped>
.dark-mode .navbar {
  background-image: linear-gradient(to right, #22c55e, #059669);
}
</style>
