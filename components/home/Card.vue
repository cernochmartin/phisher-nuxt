<script setup lang="ts">

defineProps<{
  heading?: string
  text?: string
  buttonOne?: string
  buttonTwo?: string
  image?: string
}>()

</script>
<template>
  <h3>
    {{ heading }}
  </h3>
</template>