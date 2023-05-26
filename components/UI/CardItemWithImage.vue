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
    <img :src="imageUrl" :alt="imageAlt" class="card__image" />
    <div class="card__body">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__description">{{ description }}</p>
      <p class="card__date">{{ date }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #FFF;
  color: #333;
  padding: 0rem;
}

.card:hover {
  box-shadow: 4px 4px 4px gray;
}

.card__image {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.card__body {
  padding: 1rem;
}

.card__title {
  font-weight: 800;
  font-size: 1.5em;
  padding: .5em 0em;
}

.card__description {
  font-size: .8em;
}

.card__date {
  font-size: .6em;
}
</style>