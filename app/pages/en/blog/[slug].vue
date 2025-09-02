<script setup lang="ts">
const {setLocale, waitForPendingLocaleChange} = useI18n();
await setLocale('en');
await waitForPendingLocaleChange();
definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
})
</script>

<template>
  <AppLayout key="article-en">
    <PagesAppArticle key="article-en-slot"/>
  </AppLayout>
</template>
