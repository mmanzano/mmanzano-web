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
  <div>
    <ArticleList :articles="articles" />
  </div>
</template>
