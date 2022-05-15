<template>
    <div class="border-2 bg-purple-700 text-white p-4">
        <a :href="profile">{{ media }}</a>
    </div>
</template>

<script setup lang="ts">
interface Props {
  profile: string,
  media: string,
}

defineProps<Props>()
</script>