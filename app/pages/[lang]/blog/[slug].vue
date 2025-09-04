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
  <AppLayout :key="`article-${lang}`">
    <PagesAppArticle :key="`article-${lang}-slot`" />
  </AppLayout>
</template>
