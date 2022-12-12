<script setup lang="ts">
import { RouteLocationNormalizedLoaded } from "vue-router";
definePageMeta({
  middleware: [
    'blog-is-visible',
    'redirect-if-language-is-not-supported'
  ],
  layout: 'general',
})

useHead({
  title: 'Blog',
})

const route: RouteLocationNormalizedLoaded = useRoute();

// Todo: Review later and add Typescript. I think they will add something like automatic resolution. Wait for it.
const { data: articles } = await useAsyncData(
  'home-articles',
  () => queryContent('articles')
    .without([
      'body',
    ])
    .where({
      language: route.params.lang,
      isArchived: 0
    })
    .sort({
      'order': -1
    })
    .find()
)
</script>

<template>
  <div>
    <ArticleList :articles="articles" />
  </div>
</template>
