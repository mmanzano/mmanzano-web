<template>
  <div class="container">
    <NuxtLink to="/en">English</NuxtLink>
    |
    <NuxtLink to="/es">Castellano</NuxtLink>
  </div>
</template>
<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--layout-bg-color);
}
</style>