<script setup lang="ts">
const {setLocale, waitForPendingLocaleChange} = useI18n();
await setLocale('es');
await waitForPendingLocaleChange();
</script>

<template>
  <AppLayout key="licenses-es">
    <PagesAppLicenses key="licenses-es-slot" />
  </AppLayout>
</template>
