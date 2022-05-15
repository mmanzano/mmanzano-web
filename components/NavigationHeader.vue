<template>
  <div class="w-full px-10 py-2 bg-yellow-300 flex flex-row justify-between items-center">
    <ul class="text-xl space-x-4 underline">
      <NuxtLink to="/" as="li">Inicio</NuxtLink>
      <NuxtLink to="/blog" as="li" v-if="config.blogIsVisible">Blog</NuxtLink>
    </ul>
    <div>
      <TheSearchInput />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useNuxtApp().$config;
</script>
