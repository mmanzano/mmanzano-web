export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig()
  if (!config.public.blogIsVisible) {
    return '/'
  }
})
