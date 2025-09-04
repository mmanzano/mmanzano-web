export const useRouteLang = (): "en" | "es" => {
    const route = useRoute();

    let lang = route.params.lang;

    if (typeof lang !== 'string') {
        lang = 'en';
    }

    if ((lang === 'en') || (lang === 'es')) {
        return lang;
    }

    return 'en';
}
