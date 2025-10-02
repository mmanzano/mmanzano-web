<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t('lab')
});
const star = ref<string>('');
const stars = ref<string[]>([]);
</script>

<template>
  <div>
    <p>{{ t('lab_headline') }}</p>
    <div class="lab-list">
      <div class="lab-item">
        <LabSelectWithSearchBox v-model="star">
          <template #title>Select With Search Box</template>
          <template #default v-if="star">
            <div style="margin-top: 1rem;">
              Star scientific name: {{ star }}
            </div>
          </template>
        </LabSelectWithSearchBox>
      </div>
      <div class="lab-item">
        <LabSelectWithSearchBox v-model="stars" multiple>
          <template #title>Multiple Select With Search Box</template>
          <template #default v-if="stars.length">
            <div style="margin-top: 1rem;">
              Star scientific names: {{ stars.join(', ') }}
            </div>
          </template>
        </LabSelectWithSearchBox>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lab-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  margin-top: 2rem;
}
.lab-item {
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  outline: 1px solid #cecece;
  padding: 1rem;
}
</style>
