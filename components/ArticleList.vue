<script setup lang="ts">
import type Article from '@/interfaces/Article'

interface Props {
  articles: Article[]
}

defineProps<Props>()
</script>

<template>
  <div class="card__list">
    <article v-for="article in articles" :key="article.slug">
      <ArticleCard :article="article" />
    </article>
  </div>
</template>

<style scoped>
.card__list {
  display: grid;
  justify-items: center;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(18rem, 100%), 1fr));
}

article {
  width: 100%;
}
</style>
