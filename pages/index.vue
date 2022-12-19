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
    <SocialMediaLinkList class="mt-8" />
    <ServiceList class="mt-8" />
    <AbilityList class="mt-8" />
  </div>
</template>
