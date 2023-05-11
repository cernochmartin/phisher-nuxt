<script setup>
// const credentials = reactive({
//   email: '',
//   password: '',
// })

// const client = useSupabaseAuthClient()
// const router = useRouter()
// const user = useSupabaseUser()

// async function login() {
//   const { email, password } = credentials;
//   const { error } = await client.auth.signInWithPassword({ email, password })
//   if (!error) return router.push('/')
//   console.log(error)
// }

// watchEffect(async () => {
//   if (user.value) {
//     await router.push('/')
//   }
// })

definePageMeta({
  layout: 'sign'
})
</script>
<template>
  <div class="login">
    <SignNavBar />
    <article class="flex justify-center items-center h-full">
      <div class="bg-white bg-opacity-90 rounded p-8 text-gray-600 border border-gray-600">
        <h2 class="text-4xl">Log in to your account</h2>
        <hr class="h-0.5 w-full bg-gray-600 mt-4">
        <form class="flex flex-col gap-8 text-xl pt-8">
          <div class="flex flex-col gap-3">
            <label for="email">E-mail: </label>
            <input type="email" id="email" v-model="credentials.email"
              class="bg-gray-600 text-white rounded p-2 text-lg" />
          </div>
          <div class="flex flex-col gap-3">
            <label for="password">Password: </label>
            <input type="password" id="password" v-model="credentials.password"
              class="bg-gray-600 text-white rounded p-2" />
          </div>
          <div class="flex justify-center">
            <button type="submit" class="p-2 w-24 bg-gray-600 rounded text-white text-xl">Submit</button>
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