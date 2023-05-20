<script setup lang="ts">

defineProps<{
  heading?: string
  content?: string
}>()

</script>
<template>
  <div class="facturation_card">
    <h3 class="text-3xl text-center">{{ heading }}</h3>
    <hr class="bg-gray-600 w-full h-0.5 my-3.5">
    <div class="p-4 text-lg">
      <p>{{ content }}</p>
    </div>
  </div>
</template>
<style scoped>
.facturation_card {
  background-color: #f2f2f2;
  width: 720px;
  height: 720px;
  padding: 24px;
}
</style>