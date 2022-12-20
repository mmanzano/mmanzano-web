<script setup lang="ts">
const config = useRuntimeConfig()
const { lang } = useSupportedNavigatorLanguage()
</script>

<template>
  <div class="w-full px-10 py-2 bg-yellow-300 flex flex-row justify-between items-center">
    <ul class="text-xl space-x-4 underline">
      <NuxtLink to="/" as="li">{{ lang == 'es' ? 'Inicio' : 'Home' }}</NuxtLink>
      <NuxtLink :to="{ name: 'lang-blog', params: { lang } }" as="li" v-if="config.public.blogIsVisible">Blog</NuxtLink>
    </ul>
  </div>
</template>
