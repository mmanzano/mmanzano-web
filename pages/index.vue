<script setup lang="ts">
const { lang } = useSupportedNavigatorLanguage()
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
