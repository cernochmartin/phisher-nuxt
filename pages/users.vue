<script setup lang="ts">
import { supabase } from "../components/supabase"

const showPopup = ref(false)

definePageMeta({
  middleware: 'auth',
})

const user = useSupabaseUser()
onBeforeMount(() => {
  if (!user.value) {
    navigateTo('/')
  }
})

const { data, error } = await supabase
  .from('users_database')
  .select('*')

useHead({
  title: 'Phisher | Admin Portal: Manage users'
})
</script>
<template>
  <div class="flex gap-6 items-center text-2xl pb-20">
    <h2 class="text-4xl">Manage users</h2>
    <span>></span>
    <button @click="showPopup = true" type="submit" class="underline">
      Add user
    </button>
  </div>
  <table class="w-full">
    <tr class="text-lg">
      <th>Name</th>
      <th>E-mail</th>
      <th>Role</th>
      <th>Delete user</th>
    </tr>
    <UserTable v-for="(item, index) in data" :key="item.email" v-bind="item" :index="index" :supabase-data="data" />
  </table>
  <AddUserButton @click="showPopup = true" />
  <PopupAddUser v-show="showPopup" @close-popup-add="showPopup = false" :last-id="data![data?.length! - 1].id" />
</template>