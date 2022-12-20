import { RouteLocationNormalizedLoaded } from "vue-router"

export const useLanguageFromRoute = (to?: RouteLocationNormalizedLoaded): string | null => {
    if (to === undefined) {
        return null
    }

    if (to.params.lang) {
        if (Array.isArray(to.params.lang)) {
            return to.params.lang[0]
        }

        return to.params.lang
    }

    return null
}
