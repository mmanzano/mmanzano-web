<script setup lang="ts">
import type Author from '@/interfaces/Author'

interface Props {
  author: Author,
}

defineProps<Props>()
</script>

<template>
  <p>
    {{ author.name }}
  </p>
</template>
