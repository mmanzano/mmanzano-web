<script setup lang="ts">
defineProps({
  error: Object
})

useHead({
  title: 'Miguel Manzano - Página no encontrada',
  meta: [{ name: 'og:title', content: 'Miguel Manzano - Página no encontrada' }]
})
</script>

<template>
  <div class="container mx-auto p-10">
    <MainHeader />
    <h1>{{ error.message }}</h1>
    <NuxtLink to="/">
      Volver a casa
    </NuxtLink>
  </div>
</template>
