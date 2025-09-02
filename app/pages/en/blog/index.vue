<script setup lang="ts">
const {setLocale} = useI18n();
await setLocale('en');

definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
})
useHead({
  title: 'Blog',
})

const articleList = await useBlogIndex('en')
</script>

<template>
  <div>
    <ArticleList :articles="articleList" />
  </div>
</template>
