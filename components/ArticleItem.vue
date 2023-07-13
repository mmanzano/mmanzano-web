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
  <article v-if="article" class="article-item">
    <h2 class="article-item--title">{{ article.title }}</h2>

    <ContentRenderer class="article-item--body" :value="article"></ContentRenderer>

    <img :src="`/pictures/${article.img}`" />
    <ArticleItemAuthor v-for="author in article.authors" :key="author.name" :author="author" />
    <p class="article-item--date">
      {{ t('article_last_updated_at') }}:
      {{ formatDate(article.language, article.updatedAt) }}
    </p>
    <ArticleItemPrevNext :prev="prev" :next="next" />
  </article>
</template>

<style>
.article-item {
  padding: 0.1rem 1rem;
}

.article-item--title {
  font-family: "RhodiumLibre", "Roboto", Arial, Helvetica, sans-serif;
  font-size: var(--font-size-4);
  line-height: 1.5em;
  border-bottom: 2px solid var(--menu-button-bg-color);
}

.article-item--date {
  font-size: var(--font-size-1);
  line-height: 1.5em;
}

.article-item--body {
  font-size: var(--font-size-2);
  margin-top: 1em;
  line-height: 1.5em;
}

.article-item--body p {
  margin-bottom: 1em;
}

@media(min-width: 750px) {
  .article-item {
    padding: 0rem 0.5rem 0.5rem;
  }

  .article-item--title {
    font-size: var(--font-size-5);
  }

  .article-item--body {
    font-size: var(--font-size-2);
    margin-top: 2em;
    line-height: 2em;
  }

  .article-item--body p {
    margin-bottom: 2em;
  }
}
</style>
