import type { RouteLocationNormalizedLoaded } from "vue-router";

export const usePropertyFromRoute = (to: RouteLocationNormalizedLoaded, property: 'slug' | 'lang'): string | null => {
    if (!to.params[property]) {
        return null;
    }

    const value: string | string[] = to.params[property];

    if (typeof value === 'string') {
        return value;
    }

    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'string') {
        return value[0];
    }

    return null;
}
