<script setup lang="ts">
import type PaginatorRef from '@/interfaces/PaginatorRef'

interface Props {
  prev: PaginatorRef | null,
  next: PaginatorRef | null,
}

defineProps<Props>()
</script>

<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'lang-blog-slug', params: { slug: prev.slug } }"
      class="font-bold text-primary hover:underline"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>

    <NuxtLink
      v-if="next"
      :to="{ name: 'lang-blog-slug', params: { slug: next.slug } }"
      class="font-bold text-primary hover:underline"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>
