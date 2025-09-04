export default defineNuxtRouteMiddleware((to) => {
    const noLang = !to.params.lang;

    if (noLang) {
        return;
    }

    const isValidLang = typeof to.params.lang === 'string' && /^(es|en)$/.test(to.params.lang);

    if(isValidLang) {
        return;
    }

    return '/';
});
