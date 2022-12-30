<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - Miguel Manzano` : 'Miguel Manzano'
})
</script>

<template>
  <div class="layout__container">
    <div class="layout__background">
      <MainHeader />
      <div class="layout__content">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout__container {
  width: 100%;
}

.layout__background {
  @apply min-h-screen bg-yellow-100 text-xl;
}

.layout__content {
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
}
</style>
