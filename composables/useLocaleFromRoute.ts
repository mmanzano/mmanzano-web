import { resolve } from "path";

export const useLocaleFromRoute = async (): Promise<void> => {
    const { setLocale } = useI18n()
    const route = useRoute();
    const language = route.fullPath.split('/')[1]
    if (['es', 'en'].includes(language)) {
       return setLocale(language)
    }

    return;
}
