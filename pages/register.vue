<script setup>
// const credentials = reactive({
//   firstName: '',
//   surname: '',
//   email: '',
//   password: '',
//   passwordRepeat: '',
// })

// const client = useSupabaseAuthClient();

// async function register() {
//   const { firstName, surname, email, password, passwordRepeat } = credentials;
//   if (password !== passwordRepeat) return;
//   const { error } = await client.auth.signUp({
//     email,
//     password,
//     options: {
//       data: {
//         first_name: firstName,
//         surname,
//         email,
//       },
//       emailRedirectTo: 'http://localhost:3000/login',
//     },
//   });
//   if (error) {
//     alert('Something went wrong !')
//     return
//   }
//   alert('Open the email we sent you to verify your account!')
// }

definePageMeta({
  layout: 'sign'
})
</script>
<template>
  <div class="login">
    <SignNavBar />
    <article class="flex justify-center items-center h-full">
      <div class="bg-white bg-opacity-90 rounded p-8 text-gray-600 border border-gray-600">
        <h2 class="text-4xl">Create your account</h2>
        <hr class="h-0.5 w-full bg-gray-600 mt-4">
        <form class="flex flex-col gap-8 text-xl pt-8">
          <div class="flex flex-col gap-3">
            <label for="first-name">First Name: </label>
            <input type="text" id="first-name" v-model="credentials.firstName"
              class="bg-gray-600 text-white rounded p-2 text-lg" />
          </div>
          <div class="flex flex-col gap-3">
            <label for="surname">Surname: </label>
            <input type="text" id="surname" v-model="credentials.surname"
              class="bg-gray-600 text-white rounded p-2 text-lg" />
          </div>
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
          <div class="flex flex-col gap-3">
            <label for="password">Repeat Password: </label>
            <input type="password" id="repeat-password" v-model="credentials.passwordRepeat"
              class="bg-gray-600 text-white rounded p-2 text-lg" />
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