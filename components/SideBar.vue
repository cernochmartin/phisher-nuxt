<script setup lang="ts">
const showSidebar = ref(true)
</script>
<template>
  <nav v-if="showSidebar" class="sidebar p-6 w-56 min-h-screen h-auto">
    <div class="flex justify-center pb-8">
      <i class="fa-solid fa-bars fa-xl cursor-pointer" @click="showSidebar = !showSidebar" />
    </div>
    <ul class="grid grid-cols-1 gap-1">
      <li class="flex gap-3">
        <i class="fa-solid fa-house pt-0.5 w-6 text-center" />
        <NuxtLink to="/home">Home</NuxtLink>
      </li>
      <li class="flex gap-3">
        <i class="fa-solid fa-newspaper pt-0.5 w-6 text-center" />
        <NuxtLink to="/news">What's new</NuxtLink>
      </li>
      <li class="flex gap-3">
        <i class="fa-solid fa-user pt-0.5 w-6 text-center" />
        <NuxtLink to="/users">Users</NuxtLink>
      </li>
      <li class="flex gap-3">
        <i class="fa-solid fa-credit-card pt-0.5 w-6 text-center" />
        <NuxtLink to="/facturation">Facturation</NuxtLink>
      </li>
      <li class="flex gap-3">
        <i class="fa-solid fa-gears pt-0.5 w-6 text-center" />
        <NuxtLink to="/settings">Settings</NuxtLink>
      </li>
    </ul>
    <hr class="bg-gray-600 h-0.5 w-full mt-6">
  </nav>
  <div v-else class="p-12 w-14 min-h-screen h-auto">
    <i class="fa-solid fa-bars fa-2xl cursor-pointer" @click="showSidebar = !showSidebar" />
  </div>
</template>
<style scoped>
.sidebar {
  background-color: #f2f2f2;
}

.dark-mode .sidebar {
  background-color: #1c1917;
}

.router-link-exact-active {
  font-weight: 600;
}
</style>