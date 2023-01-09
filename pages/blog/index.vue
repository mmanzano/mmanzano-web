<script setup lang="ts">
definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
})
defineI18nRoute({
  locales: ['en']
})
useHead({
  title: 'Blog',
})

const articleList = await useBlogIndex()
</script>

<template>
  <div>
    <ArticleList :articles="articleList" />
  </div>
</template>
