<script setup lang="ts">
import type Article from '@/interfaces/Article'
import type PaginationRef from '@/interfaces/PaginationRef'

interface Props {
  article: Article,
  prev: PaginationRef,
  next: PaginationRef,
}

defineProps<Props>()

const formatDate = (date: string): string => {
  const options: object = {year: 'numeric', month: 'long', day: 'numeric'}
  return new Date(date).toLocaleDateString('es', options)
}
</script>

<template>
  <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
    <h2>{{ article.title }}</h2>
    <h3>{{ article.description }}</h3>
    <p class="text-sm">Última actualización: {{ formatDate(article.updatedAt) }}</p>

    <TocList :toc="article.toc" />

    <NuxtContent :document="article" />

    <TheAuthor :author="article.author" />

    <PrevNext :prev="prev" :next="next" />
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
