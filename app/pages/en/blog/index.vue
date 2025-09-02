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
  <AppLayout key="blog-en">
    <PagesAppBlog blog-language="en" key="blog-en-slot" />
  </AppLayout>
</template>
