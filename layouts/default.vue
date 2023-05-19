<script setup>

const showPopupMessage = ref(false)

</script>
<template>
  <NavBar />
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
