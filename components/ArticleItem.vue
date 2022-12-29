<script setup lang="ts">
import { useArticleStore } from '@/stores/ArticleStore'
import type Article from '@/interfaces/Article'

interface Props {
  article: Article | null,
}

const props = defineProps<Props>()

const ArticleStore = useArticleStore()
if (props.article !== null) {
  const lang = props.article.language
  const slug = props.article.slug
  const path = props.article._path
  await ArticleStore.getPaginator(lang, slug, path)
}
const [prev, next] = props.article ? ArticleStore.paginator : [null, null]

const formatDate = (lang: string, date: string): string => {
  const options: object = { year: 'numeric', month: 'long', day: 'numeric' }

  return new Date(date).toLocaleDateString(lang, options)
}
</script>

<template>
  <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto" v-if="article">
    <h2>{{ article.title }}</h2>
    <p class="text-sm">
      {{ article.language === 'es' ? 'Última actualización' : 'Last Updated at' }}:
      {{ formatDate(article.language, article.updatedAt) }}
    </p>

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
