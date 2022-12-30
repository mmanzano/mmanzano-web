<script setup lang="ts">
const langFromRoute: string | null = usePropertyFromRoute(useRoute(), 'lang')
if (langFromRoute === null || !['en', 'es'].includes(langFromRoute)) {
  throw createError({ statusCode: 404, fatal: true })
}

useHead({
  title: langFromRoute === 'es' ? 'Inicio' : 'Home',
})
</script>

<template>
  <div>
    <SocialMediaLinkList class="mt-8" />
    <ServiceList class="mt-8" />
    <AbilityList class="mt-8" />
  </div>
</template>
