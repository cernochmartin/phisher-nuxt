<template>
  <div class="background_overlay">
    <div class="add_user">
      <div class="text-2xl w-full flex justify-end">
        <button @click="$emit('close-popup-add')">&#10006;</button>
      </div>
      <h3 class="text-3xl text-center pb-2">Add user</h3>
      <hr class="bg-gray-500 h-0.5 mb-8">
      <div class="w-80">
        <div class="grid grid-cols-2 gap-4">
          <span>First name:</span>
          <label for="text">
            <input type="text" placeholder="First name">
          </label>
          <span>Surname:</span>
          <label for="text">
            <input type="text" placeholder="Surname">
          </label>
          <span>E-mail:</span>
          <label for="email">
            <input type="email" placeholder="E-mail">
          </label>
          <span>Role:</span>
          <label for="text">
            <input type="text" placeholder="Role">
          </label>
        </div>
      </div>
      <div class="flex w-full justify-center pt-9">
        <button type="submit"
          class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-20 p-1.5 rounded-sm">Submit</button>
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

.add_user {
  width: 440px;
  height: 420px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  margin: auto;
}

input {
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
}
</style>