<script setup lang="ts">
import type PaginatorRef from '@/interfaces/PaginatorRef'

interface Props {
  prev: PaginatorRef | null,
  next: PaginatorRef | null,
}

defineProps<Props>()
const route = useRoute()
const language = route.fullPath.split('/')[1]
const blogSlug = language === 'en' ? 'blog' : 'bitacora'
</script>

<template>
  <div class="article-list">
    <NuxtLink v-if="prev" :to="`/${language}/${blogSlug}/${prev.slug}`" class="article-list__item">
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>

    <NuxtLink v-if="next" :to="`/${language}/${blogSlug}/${next.slug}`" class="article-list__item">
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<style scoped>
.article-list {
  display: flex;
  justify-content: space-between;
}

.article-list__item {
  font-weight: var(--font-weight-bold);
}

.article-list__item:hover {
  text-decoration: underline;
}
</style>
