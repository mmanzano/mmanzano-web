<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <h3 class="headline">
      {{ t('moto_headline') }}
    </h3>
</template>

<style scoped>
.headline {
  font-family: 'RhodiumLibre', 'Roboto', Arial, Helvetica, sans-serif;
  margin: 0 auto;
  padding: 0.5rem 0.3em;
  max-width: 35rem;
  text-align: center;
  font-size: var(--font-size-2);
  border-top: 2px solid var(--headline-bg-color);
  border-bottom: 2px solid var(--headline-bg-color);
}

@media(min-width: 750px) {
    
  .headline {
    font-size: var(--font-size-4);
  }
}
</style>