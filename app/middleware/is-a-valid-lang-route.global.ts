export default defineNuxtRouteMiddleware((to) => {
    if (!to.params.lang) {
        return;
    }

    if(typeof to.params.lang === 'string' && /^(es|en)$/.test(to.params.lang)) {
        return;
    }

    return '/en';
});
