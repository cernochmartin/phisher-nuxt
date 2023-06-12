export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()

  // if(!user.value) {
  //     if(to.path === '/') {
  //         return navigateTo(to.path)
  //     }else if(to.path == '/') {
  //         return navigateTo('/auth/login')
  //     }else if(!(to.path == '/auth/login') or !(to.path == '/')) {
  //         return navigateTo('/auth/login')
  //     }else {
  //         return abortNavigation()
  //     }
  // }
  if (!user.value && to.path === '/*') {
    return navigateTo('/', {redirectCode: 301})
  }
  else if (user.value && to.path === '/') {
    return navigateTo('/home', {redirectCode: 301})
  }
})