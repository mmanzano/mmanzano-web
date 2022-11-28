<script setup lang="ts">
import type Article from '@/interfaces/Article'

interface Props {
  articles: Article[]
}

defineProps<Props>()
</script>

<template>
  <section>
    <article v-for="article in articles" :key="article.slug">
      <ArticleCard :article="article" />
    </article>
  </section>
</template>

<style scoped>
section {
  max-width: 1024px;
  margin: 2rem auto;
  display: grid;
  justify-items: center;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
}

article {
  width: 100%;
}
</style>
