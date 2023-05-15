<script setup>
// const route = useRoute()

// console.log(route)
// const path_name = route.path

// function pageTitle {
//   switch (path_name) {
//     case '/':
//       return 'Home'
//     case '/user':
//       return 'User'
//     case '/settings':
//       return 'Settings'
//     case '/facturation':
//       return 'Facturation'
//   }
// }
// useHead({
//   title: `'Phisher | Admin Portal: ${path_name}'`
// })
</script>
<template>
  <NavBar />
  <Message />
  <div class="flex">
    <SideBar />
    <div class="p-10 w-full">
      <slot />
    </div>
  </div>
  <Footer />
</template>
