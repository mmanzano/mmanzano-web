<script setup lang="ts">
import { RouteLocationNormalizedLoaded } from "vue-router"
import { useArticleStore } from "@/stores/ArticleStore"
const ArticleStore = useArticleStore();

const route: RouteLocationNormalizedLoaded = useRoute()
const lang: string | null = usePropertyFromRoute(route, 'lang')
const slug: string | null = usePropertyFromRoute(route, 'slug')
await ArticleStore.getArticle(lang, slug)
useContentHead(ArticleStore.article)
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
    <ArticleItem :article="ArticleStore.article" />
  </div>
</template>
