export const useSupportedNavigatorLanguage = (): { lang: string } => {
    const preferredLanguage = getPreferredLanguage()
    const lang = ['es', 'en'].includes(preferredLanguage) ? preferredLanguage : 'es'

    return {
        lang
    }
}

function getPreferredLanguage(): string {
    const langFromRoute = usePropertyFromRoute(useRoute(), 'lang')
    return langFromRoute || getLangFromNavigator()
}

function getLangFromNavigator(): string {
    const { isSupported, language } = useNavigatorLanguage()

    if (!isSupported.value || !language.value) {
        return 'es'
    }

    return language.value.split('_', 1)[0]
}
