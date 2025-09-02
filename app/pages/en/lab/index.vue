<script setup lang="ts">
const {setLocale, waitForPendingLocaleChange} = useI18n();
await setLocale('en');
await waitForPendingLocaleChange();
</script>

<template>
  <AppLayout key="lab-en">
    <PagesAppLab key="lab-en-slot" />
  </AppLayout>
</template>
