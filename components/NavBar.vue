<script setup lang="ts">
import { supabase } from "../components/supabase"

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  navigateTo('/')
}
</script>
<template>
  <nav class="navbar w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-32 px-6 text-white">
    <div class="w-full">
      <NuxtLink to="/home">
        <h1 class="text-lg xl:text-xl">Phisher Administration Portal</h1>
      </NuxtLink>
    </div>
    <div class="w-full flex justify-end pr-6">
      <button @click="signOut()" class="text-lg"><i class="fa-solid fa-right-from-bracket pt-0.5 pr-2" /> Sign
        Out</button>
    </div>
  </nav>
</template>
<style scoped>
.dark-mode .navbar {
  background-image: linear-gradient(to right, #22c55e, #059669);
}
</style>
