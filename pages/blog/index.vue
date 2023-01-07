<script setup lang="ts">
import { useArticleStore } from "@/stores/ArticleStore"
const ArticleStore = useArticleStore()

definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
})

useHead({
  title: 'Blog',
})

const { locale } = useI18n()
await ArticleStore.getArticleList(locale.value)
</script>

<template>
  <div>
    <ArticleList :articles="ArticleStore.articleList" />
  </div>
</template>
