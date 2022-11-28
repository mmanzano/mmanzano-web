<script setup lang="ts">
interface Props {
  profile: string,
  media: string,
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="profile">
    <div class="social-media-link">
      {{ media }}
    </div>
  </NuxtLink>
</template>

<style scoped>
.social-media-link {
  background-color: #555;
  color: white;
  padding: 1rem;
  border-radius: 0.4rem;
}
</style>