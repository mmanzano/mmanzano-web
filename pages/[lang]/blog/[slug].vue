<script setup lang="ts">
import { RouteLocationNormalizedLoaded } from "vue-router";

const route: RouteLocationNormalizedLoaded = useRoute();

// Todo: Review later and add Typescript. I think they will add something like automatic resolution. Wait for it.
const { data: article } = await useAsyncData(
  `article-${route.params.slug}`,
  () => queryContent('articles')
    .where({
      language: route.params.lang,
      slug: route.params.slug,
      isArchived: 0
    })
    .findOne()
)

useContentHead(article)
definePageMeta({
  middleware: [
    'blog-is-visible',
    'redirect-if-language-is-not-supported'
  ],
  layout: 'general',
})
</script>

<template>
  <div>
    <ArticleItem :article="article" />
  </div>
</template>
