<script setup lang="ts">
const { lang } = useSupportedNavigatorLanguage()
definePageMeta({
  middleware: [
    'redirect-to-language-root-from-home',
  ],
})
</script>

<template>
  <div>
    <p>{{ lang === 'es' ? 'Redirigiendo...' : 'Redirecting...' }}</p>
  </div>
</template>
