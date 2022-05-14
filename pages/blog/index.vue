<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <article-card :article="article"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type Article from '@/interfaces/Article'

definePageMeta({
  middleware: 'blog-is-visible',
  layout: 'general',
})

interface Props {
  articles: Article[]
}

defineProps<Props>()

// Todo: Retrieve articles from Content 2. Change that to Nuxt3 version.
// async asyncData({ $content, params }) {
//   const articles = await $content('articles')
//     .without(['body'])
//     .sortBy('order', 'asc')
//     .fetch()

//   return {
//     articles
//   }
// }
</script>
