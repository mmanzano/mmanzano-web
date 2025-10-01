<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t('lab')
});
const star = ref<string>('');
</script>

<template>
  <div>
    <p>{{ t('lab_headline') }}</p>
    <div class="lab-list">
      <LabSelectWithSearchBox v-model="star">
        Star scientific name: {{ star }}
      </LabSelectWithSearchBox>
    </div>
  </div>
</template>

<style scoped>
.lab-list {
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
}
</style>
