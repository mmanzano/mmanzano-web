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
      <NuxtLink :to="localePath('/licenses')" class="mt-8 underline">
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
  font-size: 1.25rem;
  line-height: 1.75rem;
}</style>