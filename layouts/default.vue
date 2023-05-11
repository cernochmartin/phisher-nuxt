<template>
  <NavBar />
  <div class="flex">
    <SideBar />
    <div class="p-10">
      <slot />
    </div>
  </div>
  <Footer />
</template>
