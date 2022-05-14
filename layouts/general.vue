<template>
  <div class="container mx-auto p-10">
    <MainHeader/>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const title = `Miguel Manzano - ${route.meta.title}`;
useHead({
  title,
  meta: [{ name: 'og:title', content: title }]
})
</script>