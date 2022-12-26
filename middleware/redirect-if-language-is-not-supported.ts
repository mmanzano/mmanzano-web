import { RouteLocationNormalizedLoaded } from 'vue-router'

export default defineNuxtRouteMiddleware((to: RouteLocationNormalizedLoaded) => {
  const langFromRoute = usePropertyFromRoute(to, 'lang')
  if (langFromRoute === null) {
    return
  }

  if (!(['es', 'en'].includes(langFromRoute))) {
    return '/'
  }
})
