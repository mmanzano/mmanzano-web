<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div>
    <div class="hero">
      <h1 class="moto">
        {{ t('moto') }}
      </h1>
      <h2 class="creator">
        Miguel Manzano García
      </h2>
    </div>
    <h3 class="headline">
      {{ t('moto_headline') }}
    </h3>
  </div>
</template>

<style scoped>
.hero {
  background-color: rgb(254 240 138 / 1);
  padding: 2.5rem;
}

.moto {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.creator {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.headline {
  background-color: rgb(253 224 71 /1);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgb(55 65 81 / 1);
}
</style>