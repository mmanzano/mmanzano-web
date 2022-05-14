<template>
  <div class="w-full flex flex-row justify-between items-center">
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
