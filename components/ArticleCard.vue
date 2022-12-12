<script setup lang="ts">
import type Article from '@/interfaces/Article'

interface Props {
  article: Article
}

const props = defineProps<Props>()

const formatDate = (date: string): string => {
  const options: object = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString(props.article.language, options)
}
</script>

<template>
  <NuxtLink :to="{ name: 'lang-blog-slug', params: { lang: article.language, slug: article.slug } }">
    <div class="article_card">
      <img v-if="article.img" :src="`/pictures/${article.img}`" :alt="article.alt" />
      <div>
        <h2 class="article_card__title">{{ article.title }}</h2>
        <p class="article_card__description">{{ article.description }}</p>
        <p class="article_card__date">{{ formatDate(article.updatedAt) }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.article_card {
  background-color: #FFF;
  color: #333;
  padding: 1rem;
}

.article_card:hover {
  box-shadow: 4px 4px 4px gray;
}

.article_card__title {
  font-weight: 800;
  font-size: 1.5em;
  padding: .5em 0em;
}

.article_card__description {
  font-size: .8em;
}

.article_card__date {
  font-size: .6em;
}
</style>