<script setup lang="ts">
const config = useRuntimeConfig()
const { lang } = useSupportedNavigatorLanguage()
</script>

<template>
  <div class="px-10 py-2 bg-yellow-300 flex flex-row justify-between items-start">
    <ul class="flex text-xl space-x-4 underline">
      <li>
        <NuxtLink to="/">{{ lang === 'es' ? 'Inicio' : 'Home' }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'lang-lab', params: { lang } }">Lab</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'lang-blog', params: { lang } }" v-if="config.public.blogIsVisible">Blog</NuxtLink>
      </li>
    </ul>
  </div>
</template>
