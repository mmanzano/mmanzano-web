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

const route = useRoute()
await ArticleStore.getArticleList(route.fullPath.split('/')[1])
</script>

<template>
  <div>
    <ArticleList :articles="ArticleStore.articleList" />
  </div>
</template>
