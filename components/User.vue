<script setup lang="ts">
import { ref } from 'vue'
import PopupAddUser from '../components/PopupAddUser.vue'

const showPopup = ref(false)

// definePageMeta({
//   middleware: 'auth',
// })

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
    <tr>
      <td>Martin Černoch</td>
      <td>
        <div class="grid grid-cols-2">
          <NuxtLink to="mailto:cernochm@outlook.cz" target="_blank">cernochm@outlook.cz</NuxtLink>
          <i class="fa-solid fa-copy text-blue-500 cursor-pointer pt-0.5" />
        </div>
      </td>
      <td>Chief Executive Officer</td>
      <td>
        <button type="submit" class="flex gap-2">
          <span>Delete</span>
          <div class="w-6 h-6 bg-red-500 rounded-full">
            <i class="fa-solid fa-user-minus fa-xs" style="color: #ffffff;" />
          </div>
        </button>
      </td>
    </tr>
    <tr>
      <td>Jakub Moučka</td>
      <td>
        <div class="grid grid-cols-2">
          <NuxtLink to="mailto:jakub.moucka6@gmail.com" target="_blank">jakub.moucka6@gmail.com</NuxtLink>
          <i class="fa-solid fa-copy text-blue-500 cursor-pointer pt-0.5" />
        </div>
      </td>
      <td>Test Subject</td>
      <td>
        <button type="submit" class="flex gap-2">
          <span>Delete</span>
          <div class="w-6 h-6 bg-red-500 rounded-full">
            <i class="fa-solid fa-user-minus fa-xs" style="color: #ffffff;" />
          </div>
        </button>
      </td>
    </tr>
  </table>
  <AddButton />
  <PopupAddUser v-show="showPopup" @close-popup="showPopup = false" />
</template>
<style>
table,
td,
th {
  border: 1px solid black;
  padding: 8px;
  background-color: #f2f2f2;
}
</style>