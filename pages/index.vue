<script setup lang="ts">
const { lang } = useSupportedNavigatorLanguage()
definePageMeta({
  layout: 'general',
})
useHead({
  title: lang === 'es' ? 'Inicio' : 'Home',
})
</script>

<template>
  <div>
    <SocialMediaLinkList class="mt-8" />
    <ServiceList class="mt-8" />
    <AbilityList class="mt-8" />
  </div>
</template>
