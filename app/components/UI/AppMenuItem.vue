<template>
  <NuxtLink v-bind="$attrs" class="menu__item"><slot /></NuxtLink>
</template>

<style scoped>
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