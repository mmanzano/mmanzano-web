<script setup lang="ts">
const config = useRuntimeConfig()
const { lang } = useSupportedNavigatorLanguage()
</script>

<template>
  <div class="px-10 py-2 bg-yellow-300 flex flex-row justify-between items-start">
    <ul class="flex flex-wrap items-start text-xl underline">
      <li class="mr-2">
        <NuxtLink :to="{ name: 'lang', params: { lang } }">{{ lang === 'es' ? 'Inicio' : 'Home' }}</NuxtLink>
      </li>
      <li class="mr-2">
        <NuxtLink :to="{ name: 'lang-lab', params: { lang } }">Lab</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'lang-blog', params: { lang } }" v-if="config.public.blogIsVisible">Blog</NuxtLink>
      </li>
    </ul>
  </div>
</template>
