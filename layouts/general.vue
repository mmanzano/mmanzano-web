<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `Miguel Manzano - ${title}` : 'Miguel Manzano'
})
</script>

<template>
  <div class="w-full">
    <MainHeader />
    <div class="min-h-screen bg-yellow-100 px-10 py-2 text-xl">
      <NuxtPage />
    </div>
  </div>
</template>
