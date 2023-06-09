<script setup lang="ts">
import { supabase } from "../components/supabase"

const signOut = async () => {
  let { error } = await supabase.auth.signOut()
  navigateTo('/')
}
</script>
<template>
  <nav class="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-6 pl-6 text-white">
    <NuxtLink to="/home">
      <h1 class="text-xl">Phisher Administration Portal</h1>
    </NuxtLink>
    <button @click="signOut()">logOut</button>
  </nav>
</template>