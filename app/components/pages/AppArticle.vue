<script setup lang="ts">
const article = await useBlogSlug();

useHead({
  title: article.title,
  meta: [
    { name: 'description', content: article.description }
  ]
});
</script>

<template>
  <div>
    <ArticleItem :article="article" />
  </div>
</template>