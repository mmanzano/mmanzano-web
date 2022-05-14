<template>
  <nav class="mt-4">
    <p v-for="link of toc" :key="link.id" class="text-xl">
      <NuxtLink :to="`#${link.id}`" class="underline">
        {{ link.text }}
      </NuxtLink>
    </p>
  </nav>
</template>

<script setup lang="ts">
import type TocItem from '@/interfaces/TocItem'

interface Props {
  toc: TocItem[],
}

const props = defineProps<Props>()
</script>
