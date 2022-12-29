<script setup lang="ts">
import { RouteLocationNormalizedLoaded } from "vue-router"
import { useArticleStore } from "@/stores/ArticleStore"
const ArticleStore = useArticleStore()

const route: RouteLocationNormalizedLoaded = useRoute()
const { lang } = useSupportedNavigatorLanguage()
const slug: string = usePropertyFromRoute(route, 'slug') as string
await ArticleStore.getArticle(lang, slug)
useHead({
  title: ArticleStore.article?.title,
  meta: [
    { name: 'description', content: ArticleStore.article?.description }
  ]
})
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
