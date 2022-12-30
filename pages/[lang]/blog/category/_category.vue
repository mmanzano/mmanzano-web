<script setup lang="ts">
definePageMeta({
  middleware: 'blog-is-visible',
})

// Todo: Retrieve articles from Content 2. Change that to Nuxt3 version.
// async asyncData({ $content, params }) {
//   const articles = await $content('articles', params.slug)
//     .where({ 'categories': { $contains: params.category } })
//     .without(['body'])
//     .sortBy('order', 'asc')
//     .fetch()

//   return {
//     articles
//   }
// }
</script>

<template>
  <div>
    <h1>Categoría: {{ $route.params.category }}</h1>
    <h3>Artículos en la categoría {{ $route.params.category }}:</h3>
    <!-- <ArticleList :articles="articles" /> -->
  </div>
</template>
