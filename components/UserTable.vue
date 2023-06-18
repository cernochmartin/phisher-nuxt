<script setup lang="ts">
import { supabase } from "../components/supabase"
const showPopupActionSuccess = ref(false)

const props = defineProps<{
  index: number
  supabaseData: any
  name?: string
  surname?: string
  email?: string
  role?: string
}>()

const jdidoprdele = async () => {
  const { error } = await supabase
    .from('users_database')
    .delete()
    .eq('id', props.supabaseData[props.index].id)
}

</script>
<template>
  <tr>
    <td>{{ name }} {{ surname }}</td>
    <td>
      <div class="flex gap-6">
        <NuxtLink :to="`mailto:${email}`" target="_blank">{{ email }}</NuxtLink>
      </div>
    </td>
    <td>{{ role }}</td>
    <td>
      <button @click="jdidoprdele()" type="submit" class="flex gap-2">
        <span>Delete</span>
        <div class="w-6 h-6 bg-red-500 rounded-full">
          <i class="fa-solid fa-user-minus fa-xs" style="color: #ffffff;" />
        </div>
      </button>
    </td>
  </tr>
  <PopupActionSuccess v-show="showPopupActionSuccess" @close-popup-success="showPopupActionSuccess = false" />
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

.dark-mode tr:nth-child(4n + 1) {
  background-color: #0c0a09;
}

.dark-mode tr:nth-child(4n + 2) {
  background-color: #1c1917;
}

.dark-mode tr:nth-child(4n + 4) {
  background-color: #0c0a09;
}

table,
th,
td {
  padding: 12px;
}
</style>