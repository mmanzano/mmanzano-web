<script setup lang="ts">
const { lang } = useSupportedNavigatorLanguage()
</script>

<template>
    <div>
        <p>{{ lang === 'es' ? 'Experimentos con CSS y JS' :'CSS and JS experiments' }}</p>
    </div>
</template>

<style scoped>

</style>