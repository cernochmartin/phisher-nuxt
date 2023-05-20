<script setup>

import { info } from '../components/content/users'

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
    <UserTable v-for="item in info" :key="item.heading" v-bind="item" />
  </table>
  <AddButton @click="showPopup = true" />
  <PopupAddUser v-show="showPopup" @close-popup="showPopup = false" />
</template>
