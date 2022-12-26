import { RouteLocationNormalizedLoaded } from "vue-router"

export const usePropertyFromRoute = (to: RouteLocationNormalizedLoaded, property: 'slug' | 'lang'): string | null => {
    if (!to.params[property]) {
        return null
    }

    if (Array.isArray(to.params[property])) {
        return to.params[property][0]
    }

    return to.params[property] as string
}
