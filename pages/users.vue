<script setup>

import { users } from '../components/content/users'

const showPopup = ref(false)

// definePageMeta({
//   middleware: 'auth',
// })

useHead({
  title: 'Phisher | Admin Portal: Manage users'
})
</script>
<template>
  <h2 class="text-4xl pb-20">Manage users</h2>
  <table class="w-full">
    <tr>
      <th>Name</th>
      <th>E-mail</th>
      <th>Role</th>
      <th>Delete user</th>
    </tr>
    <UserTable v-for="item in users" :key="item.heading" v-bind="item" />
  </table>
  <AddUserButton @click="showPopup = true" />
  <PopupAddUser v-show="showPopup" @close-popup-add="showPopup = false" />
  <PopupActionSuccess v-show="showPopupSuccess" @close-popup-success="showPopupSuccess = false" />
</template>
