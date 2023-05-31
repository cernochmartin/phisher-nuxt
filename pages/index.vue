<script setup lang="ts">
const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const client = useSupabaseClient()
const envVariables = useRuntimeConfig()

const header = {
  headers: {
    'PRIVATE-TOKEN': envVariables.SUPABASE_KEY
  }
}

definePageMeta({
  middleware: 'auth',
  layout: 'sign'
})

const signUp = async () => {
  const { user, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  })
}

const login = async () => {
  const { user, error } = await client.auth.signIn({
    email: email.value,
    password: password.value,
  })
}

const user = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/home')
    }
  })
})

useHead({
  title: 'Phisher | Admin Portal: Sign up'
})
</script>
<template>
  <div class="login">
    <article class="flex justify-center items-center h-full">
      <div class="bg-white bg-opacity-90 rounded-lg p-8 text-blue-500 border-2 border-blue-500">
        <h2 class="text-4xl">Sign up or Log in</h2>
        <hr class="h-0.5 w-full bg-blue-500 mt-4">
        <form class="flex flex-col gap-8 text-xl pt-8" @submit.prevent="() => (isSignUp ? signUp() : login())">
          <input type="email" v-model="email" placeholder="E-mail"
            class="border-blue-500 border-2 text-black rounded p-2 text-lg" />
          <input type="password" v-model="password" placeholder="Password"
            class="border-blue-500 border-2 text-black rounded p-2" />
          <button type="submit" class="p-2 bg-blue-500 rounded text-white text-xl w-full">
            <span v-if="isSignUp">Sign up</span><span v-else>Log in</span>
          </button>
          <button @click="isSignUp = !isSignUp">
            <span v-if="isSignUp">Have an account? Log in</span><span v-else>Create a new account</span>
          </button>
        </form>
      </div>
    </article>
  </div>
</template>
<style scoped>
.login {
  background-image: url('../assets/background/login.png');
  height: 100vh;
}
</style>