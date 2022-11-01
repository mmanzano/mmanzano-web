<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `Miguel Manzano - ${title}` : 'Miguel Manzano'
})
</script>

<template>
  <div class="w-full">
    <MainHeader/>
    <NuxtPage />
  </div>
</template>
