import { RouteLocationNormalizedLoaded } from "vue-router"

export const usePropertyFromRoute = (to: RouteLocationNormalizedLoaded, property: 'slug' | 'lang'): string | null => {
    if (!to.params[property]) {
        return null
    }

    const value: string | string[] = to.params[property]
    if (Array.isArray(value)) {
        return value[0]
    }

    return value
}
