export default defineNuxtRouteMiddleware((to) => {
  const { $config } = useNuxtApp()
  if (!$config.blogIsVisible) {
    return '/'
  }
  return to;
})
