export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (!user.value && to.path === '/') {
    navigateTo('/sign')
  }
  else if (user.value && to.path === '/sign') {
    navigateTo('/')
  }
})