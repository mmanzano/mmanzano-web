<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - Miguel Manzano` : 'Miguel Manzano'
})
</script>

<template>
  <div class="layout__container">
    <MainHeader />
    <div class="min-h-screen bg-yellow-100 py-2 text-xl">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.layout__container {
  width: 100%;
}
</style>
