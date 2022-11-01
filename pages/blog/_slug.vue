<script setup lang="ts">
definePageMeta({
  middleware: 'blog-is-visible',
  layout: 'general',
})

// Todo: Retrieve articles from Content 2. Change that to Nuxt3 version.
// async asyncData({$content, params}) {
//   const article = await $content('articles', params.slug).fetch()

//   const [prev, next] = await $content('articles')
//     .only(['title', 'slug'])
//     .sortBy('order', 'asc')
//     .surround(params.slug)
//     .fetch()

//   return {
//     article,
//     prev,
//     next
//   }
// }
</script>

<template>
  <div>
    <!-- <TheArticle :article="article" :prev="prev" :next="next"/> -->
  </div>
</template>
