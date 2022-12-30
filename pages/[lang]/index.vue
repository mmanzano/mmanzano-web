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
    <ServiceList class="mt-8" />
    <AbilityList class="mt-8" />
    <SocialMediaLinkList class="mt-8" />
    <div class="text-center text-xl">
      <NuxtLink :to="{ name: 'lang-licenses', params: { langFromRoute } }" class="mt-8 underline">
        {{ langFromRoute === 'es' ? 'Licencias' : 'Licenses' }}
      </NuxtLink>
    </div>
  </div>
</template>
