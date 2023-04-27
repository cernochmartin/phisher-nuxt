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
  <Nav />
  <article class="w-50 h-50 bg-pink-400">
    <h2>Log in to your account!</h2>
    <form>
      <div>
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="credentials.email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="credentials.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </article>
</template>