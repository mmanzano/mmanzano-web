<script setup lang="ts">
const {setLocale, waitForPendingLocaleChange} = useI18n();
await setLocale('es');
definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
})
</script>

<template>
  <AppLayout key="blog-es">
    <PagesAppBlog blog-language="es" key="blog-es-slot"/>
  </AppLayout>
</template>
