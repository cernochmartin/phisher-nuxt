<script setup lang="ts">
const colorMode = useColorMode()
const showPopupMessage = ref(false)
</script>
<template>
  <NavBar />
  <h3>Color mode: {{ $colorMode.value }}</h3>
  <select v-model="$colorMode.preference">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <Message @click="showPopupMessage = true" />
  <div class="flex">
    <SideBar />
    <div class="p-10 w-full">
      <slot />
    </div>
  </div>
  <PopupMessage v-show="showPopupMessage" @close-popup-message="showPopupMessage = false" />
  <Footer />
</template>
<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #292524;
  color: #ebf4f1;
}

.dark-mode .button {
  background-image: linear-gradient(to right, #22c55e, #059669);
}

.dark-mode input {
  background-color: #292524;
}
</style>
