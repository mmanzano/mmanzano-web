<script setup lang="ts">
const route = useRoute()
const title = `Miguel Manzano - ${route.meta.title}`;
useHead({
  title,
  meta: [{ name: 'og:title', content: title }]
})
</script>

<template>
  <div class="w-full">
    <MainHeader/>
    <NuxtPage />
  </div>
</template>
