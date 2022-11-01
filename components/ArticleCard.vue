<script setup lang="ts">
import type Article from '@/interfaces/Article'

interface Props {
  article: Article
}

defineProps<Props>()

const formatDate = (date: string): string => {
  const options: object = {year: 'numeric', month: 'long', day: 'numeric'}
  return new Date(date).toLocaleDateString('es', options)
}
</script>

<template>
  <div class="border-2 border-solid min-w-min">
    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
      <img v-if="article.img" :src="article.img" :alt="article.alt" />
      <div>
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p>{{ formatDate(article.updatedAt) }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
