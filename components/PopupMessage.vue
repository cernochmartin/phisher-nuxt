<template>
  <div class="background_overlay">
    <div class="message">
      <div @click="$emit('close-popup-message')" class="cursor-pointer text-2xl w-full flex justify-end">&#10006;
      </div>
      <h3 class="text-3xl text-center pb-2">Give us feedback</h3>
      <hr class="bg-gray-500 h-0.5 mb-8">
      <textarea class="w-full textarea"></textarea>
      <div class="flex gap-6 pt-4">
        <input type="text" class="w-full" placeholder="From">
        <input type="text" class="w-full" placeholder="E-mail">
      </div>
      <div class="flex w-full justify-center pt-9">
        <button type="submit" class="bg-blue-500 text-white w-20 p-1.5 rounded-sm">Submit</button>
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

.message {
  width: 620px;
  height: 700px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  margin: auto;
}

.textarea {
  height: 400px;
  padding: 8px;
}

input,
textarea {
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
}
</style>