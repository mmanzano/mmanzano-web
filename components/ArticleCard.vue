<script setup lang="ts">
import type Article from '@/interfaces/Article'
const localePath = useLocalePath()

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
  <NuxtLink :to="localePath({ name: 'blog-slug', params: { slug: article.slug } })">
    <UICardItemWithImage :image-alt="article.alt" :image-url="`/pictures/${article.img}`" :title="article.title"
      :description="article.description" :date="formatDate(article.updatedAt)" />
  </NuxtLink>
</template>
