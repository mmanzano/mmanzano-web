<script setup lang="ts">
const config = useRuntimeConfig();

const { t } = useI18n();
</script>

<template>
  <div class="navigation">
    <ul class="menu">
      <li>
        <UIAppMenuItem :to="t('root_route')">{{ t('root')}}</UIAppMenuItem>
      </li>
      <li>
        <UIAppMenuItem :to="t('home_route')">{{ t('home') }}</UIAppMenuItem>
      </li>
      <li>
        <UIAppMenuItem :to="t('blog_route')" v-if="config.public.blogIsVisible">{{ t('blog') }}</UIAppMenuItem>
      </li>
      <li>
        <UIAppMenuItem :to="t('lab_route')">{{ t('lab') }}</UIAppMenuItem>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navigation {
  padding: 0.5rem 2.5rem;
  margin-top: 1em;
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  list-style: none;
  font-size: var(--font-size-2);
  line-height: 1.75rem;
  text-decoration: underline;
  padding: 0;
}
</style>
