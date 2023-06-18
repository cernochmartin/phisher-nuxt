<script setup lang="ts">

const showPopupSuccess = ref(false)

defineProps<{
  firstName?: string
  surname?: string
}>()
</script>
<template>
  <div class="background_overlay">
    <div class="delete_user">
      <div class="text-2xl w-full flex justify-end">
        <button @click="$emit('close-popup-delete')">&#10006;</button>
      </div>
      <div class="w-full h-40 text-lg pt-2">
        <span class="text-xl flex justify-center">Are you sure you want to delete {{ firstName }} {{ surname }}?</span>
        <div class="flex gap-20 justify-center items-center h-full">
          <button @click="showPopupSuccess = true" class="text-red-500 h-12"><i
              class="fa-solid fa-circle-xmark fa-xl w-12" />No</button>
          <button @click="showPopupSuccess = true" class="text-green-500 h-12"><i
              class="fa-solid fa-circle-check fa-xl w-12" />Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.background_overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.delete_user {
  width: 440px;
  height: 240px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  margin: auto;
}

.dark-mode .delete_user {
  background-color: #1c1917;
}
</style>