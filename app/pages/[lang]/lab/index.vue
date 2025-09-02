<script setup lang="ts">
const { setLocale } = useI18n();
const lang = useRouteLang();
await setLocale(lang);
</script>

<template>
  <AppLayout :key="`lab-${lang}`">
    <PagesAppLab :key="`lab-${lang}-slot`" />
  </AppLayout>
</template>
