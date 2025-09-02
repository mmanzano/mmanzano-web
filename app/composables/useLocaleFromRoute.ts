export const useLocaleFromRoute = async (): Promise<void> => {
    const { setLocale } = useI18n()
    const route = useRoute();
    const language = route.fullPath.split('/')[1] || 'en';
    if (language === 'es' || language === 'en') {
        return setLocale(language);
    }

    return;
}
