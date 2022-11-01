<script setup lang="ts">
import type Article from '@/interfaces/Article'

definePageMeta({
  middleware: 'blog-is-visible',
  layout: 'general',
})

interface Props {
  articles?: Article[]
}

defineProps<Props>()

const { data: articles } = await useAsyncData(
  'home-articles', 
  () => queryContent('articles')
    .without(['body'])
    .where({ isArchived: 0 })
    .sort({'order': 1})
    .find()
)
</script>

<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <article-card :article="article"/>
      </li>
    </ul>
  </div>
</template>
