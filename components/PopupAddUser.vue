<script setup lang="ts">
import { supabase } from "../components/supabase"

const props = defineProps<{
  lastId?: number
}>()

const insertUsers = reactive({
  name: '',
  surname: '',
  email: '',
  role: '',
})

const emit = defineEmits()

const insertData = async () => {
  const { data, error } = await supabase
    .from('users_database')
    .insert([
      {
        name: insertUsers.name,
        surname: insertUsers.surname,
        email: insertUsers.email,
        role: insertUsers.role,
        id: props.lastId! + 1
      }
    ])
  emit('close-popup-add')
}
</script>
<template>
  <div class="background_overlay">
    <div class="add_user">
      <div class="text-2xl w-full flex justify-end">
        <button @click="$emit('close-popup-add')">&#10006;</button>
      </div>
      <h3 class="text-3xl text-center pb-2">Add user</h3>
      <hr class="bg-gray-500 h-0.5 mb-8">
      <div class="w-80">
        <form class="grid grid-cols-2 gap-4">
          <span>First name:</span>
          <label for="text">
            <input type="text" v-model="insertUsers.name" placeholder="First name">
          </label>
          <span>Surname:</span>
          <label for="text">
            <input type="text" v-model="insertUsers.surname" placeholder="Surname">
          </label>
          <span>E-mail:</span>
          <label for="email">
            <input type="email" v-model="insertUsers.email" placeholder="E-mail">
          </label>
          <span>Role:</span>
          <label for="text">
            <input type="text" v-model="insertUsers.role" placeholder="Role">
          </label>
        </form>
      </div>
      <div class="flex w-full justify-center pt-9">
        <button @click="insertData()" type="submit"
          class="button bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-20 p-1.5 rounded-sm">Submit</button>
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

.dark-mode .add_user {
  background-color: #1c1917;
}

input {
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
}
</style>