<script setup lang="ts">
import { RouteLocationNormalizedLoaded } from "vue-router"
import { useArticleStore } from "@/stores/ArticleStore"
const ArticleStore = useArticleStore()
const { locale } = useI18n()

const route: RouteLocationNormalizedLoaded = useRoute()
const slug: string | null = usePropertyFromRoute(route, 'slug')
if (slug === null) {
  throw Error('Something is not working properly. We are not getting the slug. Sorry, can you try again.')
}
await ArticleStore.getArticle(locale.value, slug)

if (!ArticleStore.article) {
  throw createError({ statusCode: 404, fatal: true })
}
useHead({
  title: ArticleStore.article?.title,
  meta: [
    { name: 'description', content: ArticleStore.article?.description }
  ]
})
definePageMeta({
  middleware: [
    'blog-is-visible',
  ],
})
</script>

<template>
  <div>
    <ArticleItem :article="ArticleStore.article" />
  </div>
</template>
