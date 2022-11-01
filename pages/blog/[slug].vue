<script setup lang="ts">
import { RouteLocationNormalizedLoaded } from "vue-router";

definePageMeta({
  middleware: 'blog-is-visible',
  layout: 'general',
})

const route: RouteLocationNormalizedLoaded = useRoute();

const { data: article } = await useAsyncData(
  `article-${route.params.slug}`, 
  () => queryContent('articles')
    .where({ isArchived: 0, slug: route.params.slug })
    .findOne()
)


// const { data: [prev, next] } = await useAsyncData(
//   `article-${route.params.slug}-links`, 
//   () => queryContent('/articles')
//     .only(['title', 'slug'])
//     .sort({'order': 1})
//     .findSurround(toString(route.params.slug))
// )

// console.log('hola');
// console.log(prev, next);
</script>

<template>
  <div>
    <TheArticle :article="article"/>
    <!-- <TheArticle :article="article" :prev="prev" :next="next"/> -->
  </div>
</template>
