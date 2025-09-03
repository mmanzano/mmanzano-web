<script setup lang="ts">
interface CardProps {
  imageUrl: string,
  imageAlt: string,
  title?: string,
  description: string,
  date: string,
}
defineProps<CardProps>()
</script>

<template>
  <div class="card">
    <NuxtImg
        :src="imageUrl"
        :alt="imageAlt"
        class="card__image"
        height="125"
    />
    <div class="card__body">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__description">{{ description }}</p>
      <p class="card__date">{{ date }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--menu-button-bg-color);
  border: 1px solid black;
  border-radius: 0 0 1em 1em;
  color: #333;
  padding: 0rem;
  box-shadow: 1px 1px 1px gray;
}

.card:hover {
  background-color: var(--menu-button-bg-color-hover);
  box-shadow: 4px 4px 4px grey;
}

.card__image {
  height: 125px;
  width: 100%;
  object-fit: cover;
}

.card__body {
  padding: 1rem;
}

.card__title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-2);
  padding: .5em 0em;
}

.card__description {
  font-size: var(--font-size-1);
}

.card__date {
  margin-top: 1em;
  text-align: right;
  font-size: var(--font-size-mini);
}
</style>