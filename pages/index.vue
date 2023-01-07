<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
useHead({
  title: t('home'),
})
</script>

<template>
  <div>
    <ServiceList class="mt-8" />
    <AbilityList class="mt-8" />
    <SocialMediaLinkList class="mt-8" />
    <div class="text-center text-xl">
      <NuxtLink :to="localePath('/licenses')" class="mt-8 underline">
        {{ t('licenses') }}
      </NuxtLink>
    </div>
  </div>
</template>
