<script setup lang="ts">
const {setLocale, waitForPendingLocaleChange} = useI18n();
await setLocale('es');
await waitForPendingLocaleChange();
</script>

<template>
  <AppLayout key="index-es">
    <PagesAppIndex key="index-es-slot" />
  </AppLayout>
</template>
