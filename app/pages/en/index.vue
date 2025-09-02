<script setup lang="ts">
const {setLocale, waitForPendingLocaleChange} = useI18n();
await setLocale('en');
</script>

<template>
  <AppLayout key="index-en">
    <PagesAppIndex key="index-en-slot" />
  </AppLayout>
</template>
