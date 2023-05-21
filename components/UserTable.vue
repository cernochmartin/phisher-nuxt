<script setup lang="ts">

const showPopupDelete = ref(false)

defineProps<{
  firstName?: string
  surname?: string
  email?: string
  role?: string
}>()
</script>
<template>
  <tr>
    <td>{{ firstName }} {{ surname }}</td>
    <td>
      <div class="flex gap-6">
        <NuxtLink :to="`mailto:${email}`" target="_blank">{{ email }}</NuxtLink>
        <button type="submit">
          <i class="fa-solid fa-copy text-blue-500 pt-0.5" />
        </button>
      </div>
    </td>
    <td>{{ role }}</td>
    <td>
      <button @click="showPopupDelete = true" type="submit" class="flex gap-2">
        <span>Delete</span>
        <div class="w-6 h-6 bg-red-500 rounded-full">
          <i class="fa-solid fa-user-minus fa-xs" style="color: #ffffff;" />
        </div>
      </button>
    </td>
  </tr>
  <PopupDeleteUser v-show="showPopupDelete" @close-popup-delete="showPopupDelete = false" />
</template>
<style>
tr:nth-child(4n + 1) {
  background-color: #e2e2e2;
}

tr:nth-child(4n + 2) {
  background-color: #f2f2f2;
}

tr:nth-child(4n + 4) {
  background-color: #e2e2e2;
}

table,
th,
td {
  padding: 12px;
}
</style>