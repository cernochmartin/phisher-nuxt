<template>
  <nav class="sidebar p-6 grid grid-cols-2 w-56 h-screen">
    <ul class="flex flex-col gap-1 items-center">
      <li><i class="fa-solid fa-house pt-0.5" /></li>
      <li><i class="fa-solid fa-user pt-0.5" /></li>
      <li><i class="fa-solid fa-credit-card pt-0.5" /></li>
      <li><i class="fa-solid fa-gears pt-0.5" /></li>
    </ul>
    <ul class="flex flex-col gap-1">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="users">Users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="facturation">Facturation</NuxtLink>
      </li>
      <li>
        <NuxtLink to="settings">Settings</NuxtLink>
      </li>
    </ul>
    <hr class="bg-gray-200 h-0.5 w-full">
  </nav>
</template>
<style scoped>
.sidebar {
  background-color: #f2f2f2;
}

.router-link-exact-active {
  font-weight: 600;
}
</style>