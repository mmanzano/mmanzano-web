import { RouteLocationNormalizedLoaded } from "vue-router"

export const useSupportedNavigatorLanguage = (): { lang: string } => {
    const preferredLanguage = getPreferredLanguage()
    const lang = ['es', 'en'].includes(preferredLanguage) ? preferredLanguage : 'es'

    return {
        lang
    }
}

function getPreferredLanguage(): string {
    const route: RouteLocationNormalizedLoaded = useRoute();
    const routeLanguage = getLangFromRoute(route)
    if (routeLanguage) {
        return routeLanguage;
    }

    return getLangFromNavigator()
}

export function getLangFromRoute(route: RouteLocationNormalizedLoaded): string | null {
    if (route.params.lang) {
        if (Array.isArray(route.params.lang)) {
            return route.params.lang[0];
        }

        return route.params.lang
    }

    return null;
}

function getLangFromNavigator(): string {
    const { isSupported, language } = useNavigatorLanguage();

    if (!isSupported.value) {
        return 'es';
    }

    if (!language.value) {
        return 'es'
    }

    return language.value.split('_', 1)[0]
}
