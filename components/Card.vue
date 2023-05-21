<script setup lang="ts">

defineProps<{
  heading?: string
  content?: string
  link?: {
    path?: string
    linkName?: string
  }
}>()

</script>
<template>
  <div class="card">
    <div class="w-full h-10 flex justify-center items-center">
      <h3 class="text-lg">{{ heading }}</h3>
    </div>
    <hr class="bg-gray-600 w-full h-0.5">
    <div class="p-3">
      <div class="h-16">
        <p class="text-base">
          {{ content }}
        </p>
      </div>
      <div class="flex h-40 items-end">
        <NuxtLink :to="link?.path"
          class="bg-blue-500 w-32 h-10 block text-white text-xs font-semibold flex items-center justify-center cursor-pointer rounded-sm">
          {{
            link?.linkName }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 480px;
  height: 300px;
  padding: 8px;
  background-color: #f2f2f2;
  border-radius: 8px;
  opacity: 97%;
}
</style>