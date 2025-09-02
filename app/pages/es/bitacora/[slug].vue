<script setup lang="ts">
const {setLocale} = useI18n();
await setLocale('es');

definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
})

const article = await useBlogSlug()

useHead({
  title: article.title,
  meta: [
    { name: 'description', content: article.description }
  ]
})
</script>

<template>
  <div>
    <ArticleItem :article="article" />
  </div>
</template>
