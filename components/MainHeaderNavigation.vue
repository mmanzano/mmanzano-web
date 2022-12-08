<script setup lang="ts">
const config = useRuntimeConfig();
const { isSupported, language } = useNavigatorLanguage();
let rootLanguage = 'es';
if (isSupported.value) {
  rootLanguage = language.value?.split('_', 1)[0] || 'es'
}
const lang = Array.from(['es', 'en']).includes(rootLanguage || 'es') ? rootLanguage || 'es' : 'es'
</script>

<template>
  <div class="w-full px-10 py-2 bg-yellow-300 flex flex-row justify-between items-center">
    <ul class="text-xl space-x-4 underline">
      <NuxtLink to="/" as="li">Inicio</NuxtLink>
      <NuxtLink :to="`/blog/${lang}`" as="li" v-if="config.public.blogIsVisible">Blog</NuxtLink>
    </ul>
  </div>
</template>
