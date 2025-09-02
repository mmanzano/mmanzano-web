<script setup lang="ts">
const {setLocale, waitForPendingLocaleChange} = useI18n();
await setLocale('es');
await waitForPendingLocaleChange();
definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
})
</script>

<template>
  <AppLayout key="article-es">
    <PagesAppArticle key="article-es-slot" />
  </AppLayout>
</template>

