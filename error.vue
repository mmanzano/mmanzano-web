<script setup lang="ts">
defineProps({
  error: Object,
})
await useLocaleFromRoute()
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
        <h1 class="error__message"><strong>{{ errorMessage }}</strong></h1>

        <NuxtLink :to="localePath('/')" class="error__link">
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
  min-height: 100vh;
  font-size: 1.25rem;
  background-color: rgb(254 249 195 / 1);
}

.layout__content {
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
}

.error__message {
  padding: 0px 2.5rem;
  margin: 0px 2.5rem;
}

.error__link {
  padding: 0px 2.5rem;
  margin: 0px 2.5rem;
  text-decoration: underline;
}
</style>