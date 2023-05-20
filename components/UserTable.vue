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
      <div class="flex gap-10">
        <NuxtLink :to="`mailto:${email}`" target="_blank" class="w-60">{{ email }}</NuxtLink>
        <button>
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
table,
td,
th {
  border: 1px solid black;
  padding: 8px;
  background-color: #f2f2f2;
}
</style>