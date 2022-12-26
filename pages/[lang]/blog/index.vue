<script setup lang="ts">
import { RouteLocationNormalizedLoaded } from "vue-router"
import { useArticleStore } from "@/stores/ArticleStore"
const ArticleStore = useArticleStore();

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

const route: RouteLocationNormalizedLoaded = useRoute()
const lang = usePropertyFromRoute(route, 'lang')
await ArticleStore.getArticleList(lang)
</script>

<template>
  <div>
    <ArticleList :articles="ArticleStore.articleList" />
  </div>
</template>
