<script setup lang="ts">
definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
})
defineI18nRoute({
  locales: ['en']
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
