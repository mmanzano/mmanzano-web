<template>
  <div>
    <h1>Etiqueta: {{ $route.params.tag }}</h1>
    <h3>Artículos con la etiqueta {{ $route.params.tag }}:</h3>
    <!-- <ArticleList :articles="articles" /> -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'blog-is-visible',
  layout: 'general',
})

// Todo: Retrieve articles from Content 2. Change that to Nuxt3 version.
// async asyncData({ $content, params }) {
//   const articles = await $content('articles', params.slug)
//     .where({ 'tags': { $contains: params.tag } })
//     .without(['body'])
//     .sortBy('order', 'asc')
//     .fetch()

//   return {
//     articles
//   }
// }
</script>
