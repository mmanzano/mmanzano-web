<script setup lang="ts">
import type Article from '@/interfaces/Article'

interface Props {
  article: Article
}

defineProps<Props>()

const formatDate = (date: string): string => {
  const options: object = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('es', options)
}
</script>

<template>
  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
    <div class="article_card">
      <img v-if="article.img" :src="article.img" :alt="article.alt" />
      <div>
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p>{{ formatDate(article.updatedAt) }}</p>
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
</style>