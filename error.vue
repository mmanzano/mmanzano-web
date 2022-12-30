<script setup lang="ts">
defineProps({
  error: Object,
})

useHead({
  title: 'Miguel Manzano - Página no encontrada',
  meta: [{ name: 'og:title', content: 'Miguel Manzano - Página no encontrada' }]
})
const { lang } = useSupportedNavigatorLanguage()
const errorMessage = lang === 'es' ? 'Lo sentimos, no hemos podido encontrar la página que está buscando' : 'Sorry, we cannot find the page you are looking for.'
const goHome = lang === 'es' ? 'Volver a Casa' : 'Go Home'
</script>

<template>
  <div class="w-full">
    <MainHeader />
    <div class="min-h-screen bg-yellow-100 px-10 py-2 text-xl">
      <h1 class="px-10 mt-10 mb-10"><strong>{{ errorMessage }}</strong></h1>

      <NuxtLink to="/" class="px-10 underline">
        {{ goHome }}
      </NuxtLink>
    </div>
  </div>
</template>
