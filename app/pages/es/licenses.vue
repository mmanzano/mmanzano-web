<script setup lang="ts">
const {setLocale, waitForPendingLocaleChange} = useI18n();
await setLocale('es');
</script>

<template>
  <AppLayout key="licenses-es">
    <PagesAppLicenses key="licenses-es-slot" />
  </AppLayout>
</template>
