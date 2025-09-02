import { defineStore, acceptHMRUpdate } from "pinia"

interface LanguageStoreState {
    language: String
}

export const useLanguageStore = defineStore("LanguageStore", {
    state: (): LanguageStoreState => {
        return {
            language: 'en'
        }
    },
    actions: {
        setLanguage(language: string) {
            this.language = language
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLanguageStore, import.meta.hot))
}