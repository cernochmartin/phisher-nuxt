<script setup lang="ts">
const https = reactive({

})
</script>
<template>
  <h2 class="text-4xl pb-20">Phish testing</h2>
  <h3 class="text-2xl pb-5">Input values manually</h3>
  <article class="phish">
    <div class="flex gap-6 justify-center pt-7">
      <div class="flex flex-col gap-6">
        <span>Anchor URL:</span>
        <span>Is HTTPS:</span>
      </div>
      <div class="flex flex-col gap-6">
        <input type="text" placeholder="URL" />
        <div class="flex gap-7 h-full">
          <div class="flex gap-2">
            <input type="radio" />
            <span class="text-md">Yes</span>
          </div>
          <div class="flex gap-2">
            <input type="radio" />
            <span class="text-md">No</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-center py-7">
      <button type="submit"
        class="button bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-20 p-1.5 rounded-sm">Submit</button>
    </div>
  </article>
</template>
<style scoped>
.phish {
  background-color: #f2f2f2;
  width: 520px;
  padding: 24px;
  border-radius: 8px;
}

.dark-mode .phish {
  background-color: #1c1917;
}

span {
  padding: 5px;
}

input {
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
}
</style>
