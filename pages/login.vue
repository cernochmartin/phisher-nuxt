<script setup>
const credentials = reactive({
  email: '',
  password: '',
})

const client = useSupabaseAuthClient()
const router = useRouter()
const user = useSupabaseUser()

async function login() {
  const { email, password } = credentials;
  const { error } = await client.auth.signInWithPassword({ email, password })
  if (!error) return router.push('/')
  console.log(error)
}

watchEffect(async () => {
  if (user.value) {
    await router.push('/')
  }
})
</script>

<template>
  <div class="login">
    <Nav />
    <article class="flex justify-center items-center h-full">
      <div class="h-600px w-480px bg-white bg-opacity-95 rounded p-8 text-gray-900 border border-gray-900">
        <h2 class="text-4xl">Log in to your account</h2>
        <form class="flex flex-col gap-10 text-xl pt-8">
          <div class="flex flex-col gap-3">
            <label for="email">E-mail: </label>
            <input type="email" id="email" v-model="credentials.email" placeholder="user@domain.com"
              class="bg-gray-900 text-white rounded p-2" />
          </div>
          <div class="flex flex-col gap-3">
            <label for="password">Password: </label>
            <input type="password" id="password" v-model="credentials.password"
              class="bg-gray-900 text-white rounded p-2" />
          </div>
          <div class="flex justify-center">
            <button type="submit" class="p-2 w-24 bg-gray-900 rounded text-white text-opacity-95">Submit</button>
          </div>
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