<script setup lang="ts">
const {setLocale, waitForPendingLocaleChange} = useI18n();
await setLocale('es');
</script>

<template>
  <AppLayout key="lab-es">
    <PagesAppLab key="lab-es-slot" />
  </AppLayout>
</template>
