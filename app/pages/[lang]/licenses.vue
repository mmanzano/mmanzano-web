<script setup lang="ts">
const { setLocale } = useI18n();
const lang = useRouteLang();
await setLocale(lang);
</script>

<template>
  <AppLayout :key="`licenses-${lang}`">
    <PagesAppLicenses :key="`licenses-${lang}-slot`"/>
  </AppLayout>
</template>
