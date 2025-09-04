<script setup lang="ts">
const { setLocale } = useI18n();

const lang = useRouteLang();

await setLocale(lang);

definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
});
</script>

<template>
  <AppLayout :key="`blog-${lang}`">
    <PagesAppBlog :blog-language="lang" :key="`blog-${lang}-slot`" />
  </AppLayout>
</template>
