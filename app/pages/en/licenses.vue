<script setup lang="ts">
const {setLocale, waitForPendingLocaleChange} = useI18n();
await setLocale('en');
</script>

<template>
  <AppLayout key="licenses-en">
    <PagesAppLicenses key="licenses-en-slot"/>
  </AppLayout>
</template>
