import { getLangFromRoute } from '@/composables/useSupportedNavigatorLanguage'
import { RouteLocationNormalizedLoaded } from 'vue-router';

export default defineNuxtRouteMiddleware((to: RouteLocationNormalizedLoaded) => {
  const langFromRoute = getLangFromRoute(to);
  if (langFromRoute === null) {
    return;
  }

  if (!(['es', 'en'].includes(langFromRoute))) {
    return '/'
  }
})
