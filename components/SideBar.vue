<template>
  <nav class="sidebar p-6 w-56 h-screen">
    <ul class="grid grid-cols-1 gap-1">
      <li class="flex gap-3">
        <i class="fa-solid fa-house pt-0.5 w-6" />
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="flex gap-3">
        <i class="fa-solid fa-newspaper pt-0.5 w-6" />
        <NuxtLink to="news">What's new</NuxtLink>
      </li>
      <li class="flex gap-3">
        <i class="fa-solid fa-user pt-0.5 w-6" />
        <NuxtLink to="users">Users</NuxtLink>
      </li>
      <li class="flex gap-3">
        <i class="fa-solid fa-credit-card pt-0.5 w-6" />
        <NuxtLink to="facturation">Facturation</NuxtLink>
      </li>
      <li class="flex gap-3">
        <i class="fa-solid fa-handshake-angle pt-0.5 w-6" />
        <NuxtLink to="assistant">Assistant</NuxtLink>
      </li>
      <li class="flex gap-3">
        <i class="fa-solid fa-gears pt-0.5 w-6" />
        <NuxtLink to="settings">Settings</NuxtLink>
      </li>
    </ul>
    <hr class="bg-gray-600 h-0.5 w-full mt-6">
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