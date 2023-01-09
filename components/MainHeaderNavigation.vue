<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()
const route = useRoute()
const language = route.fullPath.split('/')[1]
</script>

<template>
  <div class="px-10 py-2 bg-yellow-300 flex flex-row justify-between items-start">
    <ul class="flex flex-wrap items-start text-xl underline">
      <li class="mr-2">
        <NuxtLink :to="language === 'en' ? '/en' : '/es'">{{ t('home', language) }}</NuxtLink>
      </li>
      <li class="mr-2">
        <NuxtLink :to="language === 'en' ? '/en/lab' : '/es/lab'">Lab</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="language === 'en' ? '/en/blog' : '/es/bitacora'" v-if="config.public.blogIsVisible">{{
          t('blog')
        }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
