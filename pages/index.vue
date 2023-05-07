<script setup>
// definePageMeta({
//   middleware: 'auth',
// })

const colorMode = useColorMode()

definePageMeta({
  colorMode: 'light',
})
</script>
<template>
  <NavBar />
  <SideBar />
  <h2>Phisher</h2>
  <h3>color mode: {{ $colorMode.value }}</h3>
  <i class="fa-solid fa-sun fa-xl cursor-pointer" @click="$colorMode.preference = 'light'"></i>
  <i class="fa-solid fa-moon fa-xl cursor-pointer" @click="$colorMode.preference = 'dark'"></i>
  <Footer />
</template>
<style scoped>
body {
  background-color: white;
}

.dark-mode * {
  background-color: rgb(63, 59, 59);
  /* color: white; */
}
</style>