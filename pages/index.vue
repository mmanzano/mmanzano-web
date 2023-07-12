<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
useHead({
  title: t('home'),
})
</script>

<template>
  <div>
    <ServiceList class="service-list" />
    <AbilityList class="abilty-list" />
    <SocialMediaLinkList class="social-media-list" />
    <div class="licenses">
      <NuxtLink :to="localePath('/licenses')">
        {{ t('licenses') }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.service-list {
  margin-top: 2rem;
}
.ability-list {
  margin-top: 2rem;
}

.social-media-list {
  margin-top: 2rem;
}

.licenses {
  text-align: center;
  font-size: var(--font-size-2);
  line-height: 1.75rem;
  color: black;
}
.licenses a {
  text-decoration: none;
  color: black;
}
</style>