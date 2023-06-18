<script setup lang="ts">
const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const user = useSupabaseUser()
import { supabase } from "../components/supabase"

definePageMeta({
  middleware: 'auth',
  layout: 'sign'
})

const signUp = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })
}

const signIn = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  setTimeout(() => navigateTo('/home'), 500)
}

useHead({
  title: 'Phisher | Admin Portal: Sign up or Log in'
})
</script>
<template>
  <article class="flex justify-center items-center h-full">
    <div class="form bg-white bg-opacity-90 rounded-lg p-8 text-blue-500 border-2 border-blue-500">
      <h2 class="text-center text-2xl md:text-4xl">Sign up or Log in</h2>
      <hr class="h-0.5 w-full bg-blue-500 mt-4">
      <form class="flex flex-col gap-8 md:gap-10 xl:gap-8 text-xl pt-8">
        <input type="email" v-model="email" placeholder="E-mail"
          class="border-blue-500 border-2 text-black rounded p-2 md:text-xl text-lg" />
        <input type="password" v-model="password" placeholder="Password"
          class="border-blue-500 border-2 text-black rounded p-2 md:text-xl text-lg" />
        <button @click.prevent="() => (isSignUp ? signUp() : signIn())"
          class="button p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white w-full text-lg md:text-2xl xl:text-xl">
          <span v-if="isSignUp">Sign up</span><span v-else>Log in</span>
        </button>
        <button @click.prevent="isSignUp = !isSignUp" class="text-lg md:text-2xl xl:text-xl">
          <span v-if="isSignUp">Have an account? Log in</span><span v-else>Create a new account</span>
        </button>
      </form>
    </div>
  </article>
</template>
<style scoped>
.dark-mode .form {
  background-color: #1c1917;
  color: #22c55e;
  border-color: #22c55e;
}

.dark-mode input {
  border-color: #22c55e;
  color: #fff;
  background-color: #292524;
}

.dark-mode .button {
  background-image: linear-gradient(to right, #22c55e, #059669);
}

.dark-mode hr {
  background-color: #22c55e;
}
</style>
