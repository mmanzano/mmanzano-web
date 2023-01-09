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
  <div class="flex justify-between">
    <NuxtLink v-if="prev" :to="`/${language}/${blogSlug}/${prev.slug}`"
      class="font-bold text-primary hover:underline">
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>

    <NuxtLink v-if="next" :to="`/${language}/${blogSlug}/${next.slug}`"
      class="font-bold text-primary hover:underline">
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>
