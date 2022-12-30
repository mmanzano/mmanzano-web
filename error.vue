<script setup lang="ts">
defineProps({
  error: Object,
})

const { lang } = useSupportedNavigatorLanguage()
const titleMessage = lang === 'es' ? 'Pagina no encontrada' : 'Page not found';
const errorMessage = lang === 'es' ? 'Lo sentimos, no hemos podido encontrar la página que está buscando' : 'Sorry, we cannot find the page you are looking for.'
const goHome = lang === 'es' ? 'Volver a Casa' : 'Go Home'
useHead({
  title: `${titleMessage} - Miguel Manzano`
})
</script>

<template>
  <div class="layout__container">
    <div class="layout__background">
      <MainHeader />
      <div class="layout__content">
        <h1 class="px-10 mt-10 mb-10"><strong>{{ errorMessage }}</strong></h1>

        <NuxtLink :to="{ name: 'lang', params: { lang } }" class="px-10 underline">
          {{ goHome }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout__container {
  width: 100%;
}

.layout__background {
  @apply min-h-screen bg-yellow-100 text-xl;
}

.layout__content {
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
}
</style>