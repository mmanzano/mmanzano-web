<template>
  <div class="container">
    <div>
      <UIAppMenuItem to="/en">English</UIAppMenuItem>
    </div>
    <div>
      <TheTDDDiagram>
        <template #test>
          Hi
        </template>
        <template #code>
          Hola
        </template>
        <template #refactor>
          👋
        </template>
      </TheTDDDiagram>
    </div>
    <div>
      <UIAppMenuItem to="/es">Castellano</UIAppMenuItem>
    </div>
  </div>
</template>
<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--layout-bg-color);
  font-size: var(--font-size-2);
}
</style>
<script setup lang="ts">
</script>