<script setup lang="ts">
import type Article from '@/interfaces/Article'

interface Props {
  articles: Article[]
}

defineProps<Props>()
</script>

<template>
  <ul>
    <li v-for="article in articles" :key="article.slug">
      <ArticleCard :article="article"/>
    </li>
  </ul>
</template>
