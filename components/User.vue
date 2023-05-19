<script setup lang="ts">

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
        <div class="flex gap-10">
          <NuxtLink to="mailto:cernochm@outlook.cz" target="_blank" class="w-60">cernochm@outlook.cz</NuxtLink>
          <button>
            <i class="fa-solid fa-copy text-blue-500 pt-0.5" />
          </button>
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
        <div class="flex gap-10">
          <NuxtLink to="mailto:jakub.moucka6@gmail.com" target="_blank" class="w-60">jakub.moucka6@gmail.com</NuxtLink>
          <button>
            <i class="fa-solid fa-copy text-blue-500 pt-0.5" />
          </button>
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
  <AddButton @click="showPopup = true" />
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