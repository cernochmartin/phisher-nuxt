<script setup>
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const router = useRouter()

async function logOut() {
  const { error } = await client.auth.signOut()
  if (error) return
  await router.push('/login')
}
</script>

<template>
  <nav class="bg-white bg-opacity-95 h-16 shadow fixed w-full text-2xl flex items-center gap-12 pl-12 text-gray-900">
    <button v-if="user" @click="logOut()">Log Out</button>
    <NuxtLink v-if="!user" to="/login">Login</NuxtLink>
    <NuxtLink v-if="!user" to="/register">Register</NuxtLink>
  </nav>
</template>