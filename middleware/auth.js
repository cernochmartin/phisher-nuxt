export default defineNuxtRouteMiddleware((to, _from) => {

  const authClient = useSupabaseAuthClient()
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  try {
    const { data: session, error} = await authClient.auth.getSession()
    if (error) {
      console.error(error)
    }
    else {
      console.log(session)
    }
  } 
  catch (error) {
    console.error(error)
  }

  try {
    const { data: profile, error} = await supabase.from('profiles')
    .select('*')
    .eq('id', user.value.id)
    .single()
    if (error) throw error
    authStore.profile = profile
  }
  catch (error) {

  }

  if (user.value) {
    return navigateTo('/login')
  }
})