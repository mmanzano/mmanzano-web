<script setup lang="ts">
const {setLocale} = useI18n();
await setLocale('es');

definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
})
useHead({
  title: 'Bitácora',
})

const articleList = await useBlogIndex('es')
</script>

<template>
  <div>
    <ArticleList :articles="articleList" />
  </div>
</template>
