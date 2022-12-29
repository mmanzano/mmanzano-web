<script setup lang="ts">
const props = defineProps({
  error: Object,
})

useHead({
  title: 'Miguel Manzano - Página no encontrada',
  meta: [{ name: 'og:title', content: 'Miguel Manzano - Página no encontrada' }]
})
const { lang } = useSupportedNavigatorLanguage()
let errorMessage = props.error?.message;
if (props.error?.statusCode === '404') {
  errorMessage = lang === 'es' ? 'Página no encontrada' : 'Page not found'
}

const goHome = lang === 'es' ? 'Volver a Casa' : 'Go Home'
</script>

<template>
  <div class="w-full">
    <MainHeader />
    <div class="min-h-screen bg-yellow-100 px-10 py-2 text-xl">
      <h1 class="px-10 mt-10 mb-10"><strong>{{ errorMessage }}</strong></h1>

      <NuxtLink to="/" class="px-10 text-underline">
        {{ goHome }}
      </NuxtLink>
    </div>
  </div>
</template>
