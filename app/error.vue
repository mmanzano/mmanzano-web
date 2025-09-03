<script setup lang="ts">
const props = defineProps({
  error: Object,
})
const { setLocale, t } = useI18n();
const lang = useRouteLang();
await setLocale(lang);
const titleMessage = t('error_page_not_found')
const errorMessage = t('error_page_not_found_headline')
const goHome = t('error_go_home')
useHead({
  title: `${titleMessage} - Miguel Manzano`
})
</script>

<template>
  <AppLayout>
      <h1 class="error__message"><strong>{{ errorMessage }}</strong></h1>

      <NuxtLink :to="`/${lang}`" class="error__link">
          {{ goHome }}
      </NuxtLink>
  </AppLayout>
</template>

<style scoped>
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