<script setup lang="ts">
import { useArticleStore } from '@/stores/ArticleStore'
import type Article from '@/interfaces/Article'
const { t } = useI18n()

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
  <article v-if="article">
    <h2 class="article-title">{{ article.title }}</h2>
    <p class="article-date">
      {{ t('article_last_updated_at') }}:
      {{ formatDate(article.language, article.updatedAt) }}
    </p>

    <ContentRenderer class="article-body" :value="article"></ContentRenderer>

    <ArticleItemAuthor v-for="author in article.authors" :key="author.name" :author="author" />

    <ArticleItemPrevNext :prev="prev" :next="next" />
  </article>
</template>

<style scoped>
.article-title {
  font-size: 2em;
  line-height: 2em;
}

.article-date {
  font-size: 0.8em;
  line-height: 2em;
}

.article-body {
  font-size: 1em;
  line-height: 2em;
}

.article-body p {
  margin-bottom: 1em;
}
</style>
