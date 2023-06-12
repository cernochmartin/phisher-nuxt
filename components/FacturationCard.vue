<script setup lang="ts">

defineProps<{
  heading?: string
  content?: string
  switchType: {
    optionOne?: string
    optionTwo?: string
    optionThree?: string
  }
}>()

</script>
<template>
  <div class="facturation_card">
    <h3 class="text-3xl text-center">{{ heading }}</h3>
    <hr class="bg-gray-600 w-full h-0.5 my-3.5">
    <div class="p-4 text-lg">
      <p>{{ content }}</p>
    </div>
    <div class="flex flex-col gap-5 items-start p-4 pt-10 text-xl font-semibold">
      <button>{{ switchType?.optionOne }}</button>
      <button>{{ switchType?.optionTwo }}</button>
      <button>{{ switchType?.optionThree }}</button>
    </div>
  </div>
</template>
<style scoped>
.facturation_card {
  background-color: #f2f2f2;
  width: 720px;
  height: 720px;
  padding: 24px;
  border-radius: 8px;
}

.dark-mode .facturation_card {
  background-color: #1c1917;
}
</style>