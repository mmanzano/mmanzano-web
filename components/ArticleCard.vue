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
const route = useRoute();
</script>

<template>
  <NuxtLink :to="`/${route.fullPath.split('/')[1]}/blog/${article.slug}`">
    <UICardItemWithImage :image-alt="article.alt" :image-url="`/pictures/${article.img}`" :title="article.title"
      :description="article.description" :date="formatDate(article.updatedAt)" />
  </NuxtLink>
</template>
