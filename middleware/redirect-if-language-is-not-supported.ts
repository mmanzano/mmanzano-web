import { RouteLocationNormalizedLoaded } from 'vue-router'

export default defineNuxtRouteMiddleware((to: RouteLocationNormalizedLoaded) => {
  const langFromRoute = useLanguageFromRoute(to)
  if (langFromRoute === null) {
    return
  }

  if (!(['es', 'en'].includes(langFromRoute))) {
    return '/'
  }
})
