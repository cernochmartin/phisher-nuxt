<template>
  <div class="background_overlay">
    <div class="action_success">
      <div class="text-2xl w-full flex justify-end">
        <button @click="$emit('close-popup-success')">&#10006;</button>
      </div>
      <div class="flex flex-col items-center h-full gap-6 text-green-500 pt-2">
        <i class="fa-solid fa-circle-check text-8xl" />
        <span class="text-lg">Action done succesfully!</span>
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

.action_success {
  width: 440px;
  height: 240px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  margin: auto;
}
</style>