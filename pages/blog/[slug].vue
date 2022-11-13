<script setup lang="ts">
import { RouteLocationNormalizedLoaded } from "vue-router";

const route: RouteLocationNormalizedLoaded = useRoute();

const { data: article } = await useAsyncData(
  `article-${route.params.slug}`, 
  () => queryContent('articles')
    .where({ isArchived: 0, slug: route.params.slug })
    .findOne()
)

useContentHead(article)
definePageMeta({
  middleware: 'blog-is-visible',
  layout: 'general',
})
</script>

<template>
  <div>
    <TheArticle :article="article"/>
  </div>
</template>
