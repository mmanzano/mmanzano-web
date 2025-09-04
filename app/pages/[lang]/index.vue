<script setup lang="ts">
const { setLocale } = useI18n();

const lang = useRouteLang();

await setLocale(lang);
</script>

<template>
  <AppLayout :key="`index-${lang}`">
    <PagesAppIndex :key="`index-${lang}-slot`" />
  </AppLayout>
</template>
