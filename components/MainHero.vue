<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div>
    <div class="bg-yellow-200 p-10">
      <h1 class="text-4xl">
        {{ t('moto') }}
      </h1>
      <h2 class="text-xl">
        Miguel Manzano García
      </h2>
    </div>
    <h3 class="px-5 py-3 bg-yellow-300 text-gray-700 text-center text-2xl">
      {{ t('moto_headline') }}
    </h3>
  </div>
</template>
