<script setup lang="ts">
import { useArticleStore } from "@/stores/ArticleStore"
const ArticleStore = useArticleStore()

definePageMeta({
  middleware: [
    'blog-is-visible',
    'redirect-if-language-is-not-supported'
  ],
})

useHead({
  title: 'Blog',
})

const { lang } = useSupportedNavigatorLanguage()
await ArticleStore.getArticleList(lang)
</script>

<template>
  <div>
    <ArticleList :articles="ArticleStore.articleList" />
  </div>
</template>
