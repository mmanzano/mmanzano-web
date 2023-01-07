<script setup lang="ts">
defineProps({
  error: Object,
})

const { t } = useI18n()
const localePath = useLocalePath()
const titleMessage = t('error_page_not_found')
const errorMessage = t('error_page_not_found_headline')
const goHome = t('error_go_home')
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

        <NuxtLink :to="localePath('/')" class="px-10 underline">
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