export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig()
  if (!config.blogIsVisible) {
    return '/'
  }
})
