<script setup lang="ts">
definePageMeta({
  middleware: 'blog-is-visible',
  layout: 'general',
})

useHead({
  title: 'Blog',
})

// Todo: Review later and add Typescript. I think they will add something like automatic resolution. Wait for it.
const { data: articles } = await useAsyncData(
  'home-articles',
  () => queryContent('articles')
    .without(['body'])
    .where({ isArchived: 0 })
    .sort({ 'order': 1 })
    .find()
)
</script>

<template>
  <div class="min-h-screen bg-purple-100 px-10 py-2 text-xl">
    <ArticleList :articles="articles" />
  </div>
</template>
