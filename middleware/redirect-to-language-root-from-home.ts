import { RouteLocationNormalizedLoaded } from 'vue-router'

export default defineNuxtRouteMiddleware((to: RouteLocationNormalizedLoaded) => {
  const { lang } = useSupportedNavigatorLanguage()

  if (!(['es', 'en'].includes(lang))) {
    return '/es'
  }

  return `/${lang}`
})
