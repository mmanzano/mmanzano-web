<script setup lang="ts">
definePageMeta({
  layout: 'general',
  title: 'Indice',
})
useHead({
  title: 'Portada',
})
</script>

<template>
  <div>
    <div class="min-h-screen bg-purple-100 px-10 py-2 text-xl">
      <SocialMediaLinks class="mt-8" />
      <Services class="mt-8" />
      <Abilities class="mt-8" />
    </div>
  </div>
</template>
