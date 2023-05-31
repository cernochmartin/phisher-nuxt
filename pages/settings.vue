<script setup>
useHead({
  title: 'Phisher | Admin Portal: Admin settings'
})
</script>
<template>
  <h2 class="text-4xl pb-20">Admin settings</h2>
  <h3 class="text-2xl pb-5">Change your settings</h3>
  <article class="settings">
    <div class="flex gap-6 justify-center pt-7">
      <div class="flex flex-col gap-6">
        <span>First name:</span>
        <span>Surname:</span>
      </div>
      <div class="flex flex-col gap-6">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Surname" />
      </div>
    </div>
    <div class="flex w-full justify-center py-7">
      <button type="submit"
        class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-20 p-1.5 rounded-sm">Submit</button>
    </div>
  </article>
</template>
<style scoped>
.settings {
  background-color: #f2f2f2;
  width: 520px;
  padding: 24px;
  border-radius: 8px;
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