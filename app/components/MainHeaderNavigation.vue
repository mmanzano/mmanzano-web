<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()
const route = useRoute()
const language = route.fullPath.split('/')[1]
</script>

<template>
  <div class="navigation">
    <ul class="menu">
      <li>
        <NuxtLink :to="language === 'en' ? '/en' : '/es'" class="menu__item">{{ t('home', language) }}</NuxtLink>
      </li>
      <!-- <li class="menu__item">
        <NuxtLink :to="language === 'en' ? '/en/lab' : '/es/lab'" class="menu__item">Lab</NuxtLink>
      </li> -->
      <li>
        <NuxtLink :to="language === 'en' ? '/en/blog' : '/es/bitacora'" v-if="config.public.blogIsVisible" class="menu__item">{{
          t('blog')
        }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navigation {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
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
  padding: 0px;
}

.menu__item {
  margin-right: 0.5rem;
  background-color: var(--menu-button-bg-color);
  padding: 0.5em 1em;
  border-radius: .3em;
  color: black;
}

.menu__item:hover {
  background-color: var(--menu-button-bg-color-hover);
}
</style>
