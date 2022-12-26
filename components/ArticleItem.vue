<script setup lang="ts">
import { useArticleStore } from '@/stores/ArticleStore'
import type Article from '@/interfaces/Article'

interface Props {
  article: Article,
}

const props = defineProps<Props>()

const formatDate = (date: string): string => {
  const options: object = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('es', options)
}

// Todo: Review later and add Typescript. I think they will add something like automatic resolution. Wait for it.
const lang = props.article.language
const slug = props.article.slug
const path = props.article._path
const ArticleStore = useArticleStore()
await ArticleStore.getPaginator(lang, slug, path)
const [prev, next] = ArticleStore.paginator
</script>

<template>
  <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
    <h2>{{ article.title }}</h2>
    <p class="text-sm">Última actualización: {{ formatDate(article.updatedAt) }}</p>

    <ContentRenderer :value="article"></ContentRenderer>

    <ArticleItemAuthor v-for="author in article.authors" :key="author.name" :author="author" />

    <ArticleItemPrevNext :prev="prev" :next="next" />
  </article>
</template>

<style lang="css">
/* box with code style */
.nuxt-content-highlight {
  @apply relative;
}

.nuxt-content-highlight .filename {
  @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
}
</style>
